import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from './forecast.type';
import { WeatherService } from '../services/weather.service';
import { CacheService } from '../services/cache-service';
import { FORECAST } from '../utils/cache-key.utility';

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
    private cacheService: CacheService,
    private location: Location
  ) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.loadForecast();
    });
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
    const cachedForecast = this.cacheService.getItem(FORECAST, this.zipcode);

    if (cachedForecast) {
      this.forecast = cachedForecast.data as Forecast;
    } else {
      this.weatherService.getForecast(this.zipcode).subscribe(data => {
        this.forecast = data;

        this.cacheService.setItem(FORECAST, { id: this.zipcode, data });
      });
    }
  }
}
