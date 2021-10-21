import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: any;
  @Input('value') public value: any;
  @Input('type') public type: "icon" | "default" = "default";
  @Input('id') public id: any;
  @Input('color') public color: string = "default-blue";
  @Input('isDisabled') isDisabled: boolean;
  @Input('width') width: string;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  constructor() { }

  public emitComponentEvent(): void {
    this.onComponentEvent.emit({ eventName: "onButtonChange", eventData: true })
  }

  ngOnInit(): void {
  }

}
