import { Component, Input } from '@angular/core';

import { CustomTabBodyComponent } from './custom-tab-body/custom-tab-body.component';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css']
})
export class CustomTabComponent {
  @Input() tabTitle: string;
  @Input() item: string;
  tabs: CustomTabBodyComponent[] = [];

  removeTab(tabIndex: number) {
    const tab = this.tabs[tabIndex];
    tab.closeTab.emit(tabIndex);
    this.tabs.splice(tabIndex, 1);
    this.tabs[tabIndex - 1].active = true;
  }

  selectTab(tab: CustomTabBodyComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: CustomTabBodyComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
