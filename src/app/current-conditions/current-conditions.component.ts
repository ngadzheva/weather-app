import {Component, inject, OnDestroy, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {Action, LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnDestroy {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
  private locationSubscription: Subscription;

  constructor() {
    this.locationSubscription = this.locationService.getLocation().subscribe((location) => {
      if (location.action === Action.ADD) {
        this.weatherService.addCurrentConditions(location.zipcode)
      } else if (location.action === Action.REMOVE) {
        this.weatherService.removeCurrentConditions(location.zipcode)
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
