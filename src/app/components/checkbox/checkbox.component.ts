import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, $ComponentTemplateClass {

  constructor() { }
  @Input('title') title: string;
  @Input('value') value: boolean = false;
  public type: any;
  public id: any;
  public color: any;
  public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  ngOnInit(): void {
  }

  public emitComponentEvent(): void {
    this.onComponentEvent.emit({ eventName: "onCheckboxChange", eventData: this.value })
  }

  public onSelectionChange(event) {
    const value = event?.srcElement?.checked;
    this.value = value;
  }
}
