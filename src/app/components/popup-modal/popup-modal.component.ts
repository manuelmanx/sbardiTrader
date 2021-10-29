import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit, $ComponentTemplateClass {

  constructor() { }
  @Input('title') public title: any;
  public value: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public tooltip: string;
  @Input() public saveButtonEnabled: boolean = false;
  @Input('isLoading') public isLoading: boolean = false;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public emitComponentEvent(eventName?: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: null })
  }

  ngOnInit(): void {
  }

  public enableDisableSaveButton(value: boolean) {
    this.saveButtonEnabled = value;
  }

  public onSaveButtonClick(): void {
    this.emitComponentEvent("onSaveModalClick")
  }
  public onDestroyButtonClick(): void {
    this.emitComponentEvent("onDestroyModalClick")
  }
  public onDraggableModalEvent(event): void {
    switch (event?.eventName) {
      case "onCloseDraggableModal":
        this.emitComponentEvent("onDestroyModalClick");
        break;
    }
  }
}
