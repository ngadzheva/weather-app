import { Component, inject, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { ConditionsAndZip } from '../conditions-and-zip.type';
import { WeatherService } from '../services/weather.service';
import { Action, LocationService } from '../services/location.service';
import { CacheService } from '../services/cache-service';
import { CACHE_KEYS } from '../config/cache.config';
import { WithUnsubscribe } from '../utils/with-unsubscribe';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent extends WithUnsubscribe() {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  private cacheService = inject(CacheService);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  constructor() {
    super();

    // Subscribe to the locations observable and listen for its events
    this.locationService.getLocation().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((location) => {
      if (location.action === Action.ADD) {
        if (!this.currentConditionsByZip().find(conditions => conditions.zip === location.zipcode))
          this.weatherService.addCurrentConditions(location.zipcode);
      } else if (location.action === Action.REMOVE) {
        const { zipcode } = location;

        this.weatherService.removeCurrentConditions(zipcode);
        // Remove the location from the cache as well
        this.cacheService.removeItem(CACHE_KEYS.CURRENT_CONDITIONS, zipcode);
        this.cacheService.removeItem(CACHE_KEYS.FORECAST, zipcode);
      }
    });

    // Load the locations after we have
    // subscribed to the location observable
    this.locationService.loadLocations();
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  // Remove location from the list by the index
  // of the tab which close button is clicked
  removeLocation(index: number) {
    this.locationService.removeLocation(index);
  }

  // Helper method for setting the zipcode to the url hash
  extractHash(tabTitle: string) {
    return tabTitle.match(/\(([^)]+)\)/)[1];
  }
}
