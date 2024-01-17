import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const LOCATIONS : string = "locations";

export enum Action { ADD, REMOVE };

interface Location {
  action: Action;
  zipcode: string;
}

@Injectable()
export class LocationService {

  locations : string[] = [];
  private location$ = new Subject<Location>();

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations = JSON.parse(locString);
    for (let loc of this.locations)
      this.location$.next({action: Action.ADD, zipcode: loc});
  }

  addLocation(zipcode : string) {
    if (this.locations.includes(zipcode)) {
      return;
    }

    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.location$.next({action: Action.ADD, zipcode});
  }

  removeLocation(index : number) {
    const zipcode = this.locations[index];
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.location$.next({action: Action.REMOVE, zipcode});
    }
  }

  getLocation() {
    return this.location$.asObservable();
  }
}
