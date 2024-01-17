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

    // Emit the tab index to remove
    // the corresponding location as well
    tab.closeTab.emit(tabIndex);

    // Remove tab from the list and
    // make the previous one active
    this.tabs.splice(tabIndex, 1);
    this.tabs[tabIndex - 1].active = true;
  }

  // Activate the current tab and show its content
  selectTab(tab: CustomTabBodyComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true;
  }

  // Add new tab to the list
  addTab(tab: CustomTabBodyComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }

    this.tabs.push(tab);
  }
}
