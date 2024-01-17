import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from './forecast.type';
import { WeatherService } from '../services/weather.service';
import { CacheService } from '../services/cache-service';
import { forecastKey } from '../utils/cache-key.utility';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode: string;
  forecast: Forecast;

  constructor(
    protected weatherService: WeatherService,
    route : ActivatedRoute,
    private cacheService: CacheService
  ) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.loadForecast();
    });
  }

  /**
   * Helper method for fetching the 5-day forecast weather
   * First, we check for stored forecast in the cache
   * If it is available, we use it for initializing forecast
   * Otherwise, we fetch the udpated forecast from the API and update the cache
   */
  private loadForecast() {
    const cachedForecast = this.cacheService.getItem(forecastKey(this.zipcode));

    if (cachedForecast) {
      this.forecast = cachedForecast.data;
    } else {
      this.weatherService.getForecast(this.zipcode).subscribe(data => {
        this.forecast = data;
        this.cacheService.setItem(forecastKey(this.zipcode), JSON.stringify(data));
      });
    }
  }
}
