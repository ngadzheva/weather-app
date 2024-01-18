import { Component, inject, OnDestroy, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConditionsAndZip } from '../conditions-and-zip.type';
import { WeatherService } from '../services/weather.service';
import { Action, LocationService } from '../services/location.service';
import { CacheService } from '../services/cache-service';
import { currentConditionsKey, forecastKey } from '../utils/cache-key.utility';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnDestroy {

  private locationSubscription: Subscription;
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  private cacheService = inject(CacheService);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  constructor() {
    // Subscribe to the locations observable and listen for its events
    this.locationSubscription = this.locationService.getLocation().subscribe((location) => {
      if (location.action === Action.ADD) {
        if (!this.currentConditionsByZip().find(conditions => conditions.zip === location.zipcode))
          this.weatherService.addCurrentConditions(location.zipcode);
      } else if (location.action === Action.REMOVE) {
        const { zipcode } = location;

        this.weatherService.removeCurrentConditions(zipcode);
        // Remove the location from the cache as well
        this.cacheService.removeItem(currentConditionsKey(zipcode));
        this.cacheService.removeItem(forecastKey(zipcode));
      }
    });

    // Load the locations after we have
    // subscribed to the location observable
    this.locationService.loadLocations();
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
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
