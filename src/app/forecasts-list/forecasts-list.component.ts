import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';
import {Forecast} from './forecast.type';
import { CacheService } from 'app/cache-service';
import { forecastKey } from 'app/cache-key.utility';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode: string;
  forecast: Forecast;

  constructor(protected weatherService: WeatherService, route : ActivatedRoute, private cacheService: CacheService) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.loadForecast();
    });
  }

  private loadForecast() {
    const cachedForecast = this.cacheService.getItem(forecastKey(this.zipcode));

    if (cachedForecast) {
      this.forecast = cachedForecast.data;
    } else {
      this.weatherService.getForecast(this.zipcode)
        .subscribe(data => {
          this.forecast = data;
          this.cacheService.setItem(forecastKey(this.zipcode), JSON.stringify(data));
        });
    }
  }
}
