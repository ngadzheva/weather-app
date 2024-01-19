import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-tab-item',
  templateUrl: './ui-tab-item.component.html',
  styleUrls: ['./ui-tab-item.component.css']
})
export class UITabItemComponent {
  @Input() tabTitle: string;
  @Output() closeTab = new EventEmitter<number>();

  active = false;
}
