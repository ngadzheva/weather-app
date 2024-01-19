import { AfterContentChecked, AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';

import { UITabItemComponent } from './ui-tab-item/ui-tab-item.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.css']
})
export class UITabsComponent implements AfterContentChecked {
  @Input() extractHash: (key: string) => string;
  @ContentChildren(UITabItemComponent) tabs!: QueryList<UITabItemComponent>;
  activeTab: UITabItemComponent;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterContentChecked() {
    // Set the last active tab using the url hash
    // If there is no hash, activate the first tab
    if (this.route.snapshot.fragment) {
      const fragment = this.route.snapshot.fragment;
      this.activeTab = this.tabs.find(tab => this.extractHash(tab.tabTitle) === fragment);
      this.activeTab.active = true;
    } else {
      this.activeTab = this.tabs.first;
      if (this.activeTab) {
        this.activeTab.active = true;
        this.router.navigateByUrl('#' + this.extractHash(this.activeTab.tabTitle));
      }
    }
  }

  removeTab(tabIndex: number) {
    const tab = this.tabs.get(tabIndex);

    // Emit the tab index to remove
    // the corresponding location as well
    tab.closeTab.emit(tabIndex);

    const wasActive = tab.active;

    // If the removed tab was active
    // we set the previous one or the next one
    // (if it was the first tab) to active
    if (wasActive) {
      // If it was the only tab, remove the hash from the url
      if (this.tabs.length === 1) {
        this.router.navigateByUrl('/');
      }

      this.activeTab = this.tabs.get(tabIndex > 0 ? tabIndex - 1 : tabIndex + 1);
      this.activeTab.active = true;

      this.router.navigateByUrl('#' + this.extractHash(this.activeTab.tabTitle));
    }
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
