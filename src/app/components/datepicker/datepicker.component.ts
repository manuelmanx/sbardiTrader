import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: any;
  @Input('value') public value: Date = new Date();
  @Input('type') public type: "string" | "date" = "date";
  @Input('id') public id: any;
  @Input('color') public color: string;
  @Input('isDisabled') isDisabled: boolean;
  @Input('tooltip') public tooltip: string;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  public localDateTimeString: string;
  constructor() { }

  public emitComponentEvent(): void {
    let toEmit: any = this.value;
    if (this.type === "string") {
      toEmit = toEmit.toISOString();
    }
    this.onComponentEvent.emit({ eventName: "onDatePickerChange", eventData: toEmit })
  }
  public onSelectionChange(event: Date): void {
    this.value = new Date(this.localDateTimeString);
    this.emitComponentEvent();
  }

  public ngOnInit(): void {
    if (!!this.value && !this.isDisabled) {
      this.localDateTimeString = this.getDateTimeString(this.value);
      this.emitComponentEvent();
    }
  }

  public getDateTimeString(value: Date): string {
    return (value.toLocaleString("sv-SE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).replace(" ", "T"));
  }
}
