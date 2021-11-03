import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $TabsDataSourceType } from 'src/app/shared/interfaces/components.dto';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, $ComponentTemplateClass {

  constructor() { }
  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public tooltip: any;
  @Input('value') public value: $TabsDataSourceType[] = [
    { key: "tab1", label: "Label 1" },
    { key: "tab2", label: "Label 2" }
  ];
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public emitComponentEvent(eventName?: string): void {
    this.onComponentEvent.emit({ eventName: "OnTabChangeSelection", eventData: this.value?.find(e => e.isActive) })
  }

  ngOnInit(): void {
    if (!this.value.find(e => e.isActive) && !!this.value?.length) {
      this.value[0].isActive = true;
    }
  }
  public selectTab(key: string) {
    this.value?.forEach(e => {
      e.isActive = false;
    })
    this.value.find(e => e.key === key).isActive = true
  }
}
