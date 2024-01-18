import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTabBodyComponent } from './custom-tab-body/custom-tab-body.component';
import { CustomTabComponent } from './custom-tab.component';
import { ClickStopPropagation } from './click-stop-propagation.directive';
import { CustomTabHeaderComponent } from './custom-tab-header/custom-tab-header.component';

@NgModule({
    declarations: [
      CustomTabComponent,
      CustomTabBodyComponent,
      CustomTabHeaderComponent,
      ClickStopPropagation
    ],
    imports: [CommonModule],
    exports: [CustomTabComponent, CustomTabBodyComponent]
})
export class CustomTabModule { }