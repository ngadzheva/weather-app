import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTabBodyComponent } from './custom-tab-body/custom-tab-body.component';
import { CustomTabComponent } from './custom-tab.component';
import { ClickStopPropagation } from './click-stop-propagation.directive';

@NgModule({
    declarations: [
      CustomTabComponent,
      CustomTabBodyComponent,
      ClickStopPropagation
    ],
    imports: [CommonModule],
    exports: [CustomTabComponent, CustomTabBodyComponent]
})
export class CustomTabModule { }