import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-min-max-temperature',
  templateUrl: './min-max-temperature.component.html'
})
export class MinMaxTemperatureComponent {
  @Input() min?: number;
  @Input() max?: number;
  @Input() withHyphen: boolean = false;
}
