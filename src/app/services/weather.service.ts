import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CurrentConditions } from '../current-conditions/current-conditions.type';
import { ConditionsAndZip } from '../conditions-and-zip.type';
import { Forecast } from '../forecasts-list/forecast.type';
import { CacheService } from './cache-service';
import { CACHE_KEYS } from '../config/cache.config';
import { WithUnsubscribe } from 'app/utils/with-unsubscribe';
import { takeUntil } from 'rxjs/operators';


@Injectable()
export class WeatherService extends WithUnsubscribe() {

  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = signal<ConditionsAndZip[]>([]);
  private cachedConditions;

  constructor(private http: HttpClient, private cacheService: CacheService) {
    super();

    // If there is some cached data, we fetch it and
    // initialize the currentConditions array with it
    this.cachedConditions = this.cacheService.getItems(CACHE_KEYS.CURRENT_CONDITIONS);

    if (this.cachedConditions) {
      this.cachedConditions.forEach(cache => {
        this.currentConditions.update(conditions => {
          const cachedData = {
            zip: cache.id,
            data: cache.data
          };

          return [...conditions, cachedData];
        });
      });
    }
   }

  addCurrentConditions(zipcode: string): void {
    // We first check for cached conditions
    const cachedZipConditions = this.cachedConditions.find(conditions => conditions.id === zipcode);

    // If there are already saved conditions in the cache for the given zipcode,
    // we use them for updating the currentConditions array
    // Otherwise, we fetch the current conditions from the API and update the cache
    if (cachedZipConditions) {
      this.currentConditions.update(conditions => [...conditions, { zip: zipcode, data: cachedZipConditions.data }]);
    } else {
      // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
      this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(data => {
          this.currentConditions.update(conditions => [...conditions, { zip: zipcode, data }]);
          this.cacheService.setItem(CACHE_KEYS.CURRENT_CONDITIONS, { id: zipcode, data });
        });
    }
  }

  removeCurrentConditions(zipcode: string) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode)
          conditions.splice(+i, 1);
      }
      return conditions;
    });
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
  }

  getWeatherIcon(id): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + 'art_storm.png';
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + 'art_rain.png';
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + 'art_light_rain.png';
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + 'art_snow.png';
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + 'art_clouds.png';
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + 'art_fog.png';
    else
      return WeatherService.ICON_URL + 'art_clear.png';
  }
}
