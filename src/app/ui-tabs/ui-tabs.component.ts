import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';

import { UITabItemComponent } from './ui-tab-item/ui-tab-item.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.css']
})
export class UITabsComponent implements AfterContentInit {
  @Input() extractHash: (key: string) => string;
  @ContentChildren(UITabItemComponent) tabs!: QueryList<UITabItemComponent>;
  activeTab: UITabItemComponent;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterContentInit() {
    // Set the last active tab using the url hash
    // If there is no hash, activate the first tab
    if (this.route.snapshot.fragment) {
      const fragment = this.route.snapshot.fragment;
      this.activeTab = this.tabs.find(tab => this.extractHash(tab.tabTitle) === fragment);
      this.activeTab.active = true;
    } else {
      this.activeTab = this.tabs.first;
      this.activeTab.active = true;
      this.router.navigateByUrl('#' + this.extractHash(this.activeTab.tabTitle));
    }
  }

  removeTab(tabIndex: number) {
    const tab = this.tabs.get(tabIndex);

    // Emit the tab index to remove
    // the corresponding location as well
    tab.closeTab.emit(tabIndex);

    // Make the previous tab active
    this.tabs.get(tabIndex - 1).active = true;
  }

  // Activate the current tab and show its content
  selectTab(tab: UITabItemComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    this.activeTab = tab;
    this.activeTab.active = true;
    // Set hash to the url in order to remember the active tab
    this.router.navigateByUrl('#' + this.extractHash(this.activeTab.tabTitle));
  }
}
