import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $ComboOptionsDataSource } from 'src/app/shared/interfaces/components.dto';
import { $UserTradeOperationType, $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
import { $emptyComboboxCloseTypeTemplate, $emptyNewTradeTemplate } from 'src/app/shared/templates/new-trade-modal-form.template';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-new-trade-modal-form',
  templateUrl: './new-trade-modal-form.component.html',
  styleUrls: ['./new-trade-modal-form.component.scss']
})
export class NewTradeModalFormComponent implements OnInit, $ComponentTemplateClass {
  public imageLink: string = null;
  closeTypeCombobox: $ComboOptionsDataSource = $emptyComboboxCloseTypeTemplate
  constructor() { }
  @Input('value') public value: $UserTradeOperationType = $emptyNewTradeTemplate;
  @Input('tradingPlanRules') public tradingPlanRules: $UserTradingPlanType;
  @Output() onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;

  public emitComponentEvent(eventName?: string): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.value.id = uuidv4()
  }
  public onDestroyButtonClick() { }
  public onSaveButtonClick() {
    console.log(this.value)
  }
  public canActivateSaveButton() { return true }
}
