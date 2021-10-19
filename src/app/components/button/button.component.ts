import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: any;
  @Input('value') public value: Date = new Date();
  @Input('type') public type: "round" | "icon" | "default" = "default";
  @Input('id') public id: any;
  @Input('color') public color: "deafult-red" | "default-blue" | "primary-blue" | "primary-red" = "default-blue";
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  constructor() { }

  public emitComponentEvent(): void {
    this.onComponentEvent.emit({ eventName: "onButtonChange", eventData: true })
  }

  ngOnInit(): void {
  }

}
