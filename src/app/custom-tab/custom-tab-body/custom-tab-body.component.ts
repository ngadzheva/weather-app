import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CustomTabComponent } from '../custom-tab.component';

@Component({
  selector: 'app-custom-tab-body',
  templateUrl: './custom-tab-body.component.html',
  styleUrls: ['./custom-tab-body.component.css']
})
export class CustomTabBodyComponent {
  @Input() tabTitle: string;
  @Output() closeTab = new EventEmitter<number>();
  active = false;

  constructor(tabs: CustomTabComponent) {
    tabs.addTab(this);
  }
}
