import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const LOCATIONS : string = 'locations';

export enum Action { ADD, REMOVE };

interface LocationProps {
  action: Action;
  zipcode: string;
}

@Injectable()
export class LocationService {

  locations : string[] = [];
  // Subject for locations changes
  private location$ = new Subject<LocationProps>();

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations = JSON.parse(locString);
  }

  loadLocations() {
    for (let loc of this.locations) {
      // Emit add event
      this.location$.next({ action: Action.ADD, zipcode: loc });
    }
  }

  addLocation(zipcode : string) {
    // If the location is already added, do not duplicate it
    if (this.locations.includes(zipcode)) {
      return;
    }

    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));

    // Emit add event
    this.location$.next({ action: Action.ADD, zipcode });
  }

  removeLocation(index : number) {
    const zipcode = this.locations[index];
  
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));

      // Emit remove event
      this.location$.next({ action: Action.REMOVE, zipcode });
    }
  }

  // Export the location subject as observable
  // in order to be able to subscribe for the updates
  getLocation() {
    return this.location$.asObservable();
  }
}
