import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, $ComponentTemplateClass {

  @Input('title') title: string;
  @Input('value') value: boolean = false;
  @Input('isDisabled') isDisabled: boolean;
  public type: any;
  public id: any;
  public color: any;
  @Output() onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  constructor() { }

  ngOnInit(): void {
    if (!!this.value && !this.isDisabled) {
      this.emitComponentEvent();
    }
  }

  public emitComponentEvent(): void {
    this.onComponentEvent.emit({ eventName: "onComboboxChange", eventData: this.value })
  }

  public onSelectionChange(event) {
    const value = event?.srcElement?.checked;
    this.value = value;
    this.emitComponentEvent();
  }
}
