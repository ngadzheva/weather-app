import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UITabItemComponent } from './ui-tab-item/ui-tab-item.component';
import { UITabsComponent } from './ui-tabs.component';
import { ClickStopPropagation } from './click-stop-propagation.directive';

@NgModule({
    declarations: [
      UITabsComponent,
      UITabItemComponent,
      ClickStopPropagation
    ],
    imports: [CommonModule],
    exports: [UITabsComponent, UITabItemComponent]
})
export class UITabsModule { }