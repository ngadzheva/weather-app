import {Component, inject, OnDestroy, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {Action, LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import { Subscription } from 'rxjs';
import { CacheService } from 'app/cache-service';
import { currentConditionsKey, forecastKey } from 'app/cache-key.utility';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnDestroy {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  private cacheService = inject(CacheService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
  private locationSubscription: Subscription;

  constructor() {
    this.locationSubscription = this.locationService.getLocation().subscribe((location) => {
      if (location.action === Action.ADD) {
        this.weatherService.addCurrentConditions(location.zipcode)
      } else if (location.action === Action.REMOVE) {
        const { zipcode } = location;

        this.weatherService.removeCurrentConditions(zipcode)
        this.cacheService.removeItem(currentConditionsKey(zipcode));
        this.cacheService.removeItem(forecastKey(zipcode));
      }
    });

    this.locationService.loadLocations();
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  removeLocation(index: number) {
    this.locationService.removeLocation(index);
  }
}
