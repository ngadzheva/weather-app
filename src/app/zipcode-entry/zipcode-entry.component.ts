import { Component } from '@angular/core';

import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(private locationService : LocationService) { }

  addLocation(zipcode: HTMLInputElement) {
    this.locationService.addLocation(zipcode.value);
    zipcode.value = '';
  }

}
