import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $SnackBarDataSourceType } from 'src/app/shared/interfaces/components.dto';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, $ComponentTemplateClass {

  constructor() { }
  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public tooltip: any;
  @Input('value') public value: $SnackBarDataSourceType = {
    title: "Evento",
    subtitle: "Ecco cosa è successo"
  };
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public emitComponentEvent(eventName?: string): void {
    this.onComponentEvent.emit({ eventName: 'onSnackbarDestroy', eventData: null })
  }

  ngOnInit(): void {
  }

}
