import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { Forecast } from './forecast.type';
import { WeatherService } from '../services/weather.service';
import { CacheService } from '../services/cache-service';
import { CACHE_KEYS } from '../config/cache.config';
import { WithUnsubscribe } from '../utils/with-unsubscribe';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent extends WithUnsubscribe() {

  zipcode: string;
  forecast?: Forecast;

  constructor(
    protected weatherService: WeatherService,
    route : ActivatedRoute,
    private cacheService: CacheService,
    private location: Location
  ) {
    super();

    this.zipcode = route.snapshot.params['zipcode'];
    this.loadForecast();
  }

  goBack() {
    this.location.back();
  }

  /**
   * Helper method for fetching the 5-day forecast weather
   * First, we check for stored forecast in the cache
   * If it is available, we use it for initializing forecast
   * Otherwise, we fetch the udpated forecast from the API and update the cache
   */
  private loadForecast() {
    const cachedForecast = this.cacheService.getItem(CACHE_KEYS.FORECAST, this.zipcode);

    if (cachedForecast) {
      this.forecast = cachedForecast.data as Forecast;
    } else {
      this.weatherService.getForecast(this.zipcode).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(data => {
        this.forecast = data;

        this.cacheService.setItem(CACHE_KEYS.FORECAST, { id: this.zipcode, data });
      });
    }
  }
}
