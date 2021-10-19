import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: any = "title";
  @Input('value') public value: Date = new Date();
  @Input('type') public type: any;
  @Input('id') public id: any;
  @Input('color') public color: string;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  constructor() { }

  public emitComponentEvent(): void {
    this.onComponentEvent.emit({ eventName: "onDatePickerChange", eventData: this.value })
  }
  public onSelectionChange(event: Date): void {
    this.value = new Date(event);
    this.emitComponentEvent();
  }
  ngOnInit(): void {

  }
}
