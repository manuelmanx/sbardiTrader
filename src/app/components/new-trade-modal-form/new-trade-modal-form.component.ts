import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $ComboOptionsDataSource } from 'src/app/shared/interfaces/components.dto';
import { $UserTradeOperationType, $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
import { $emptyComboboxCloseTypeTemplate, $emptyMultiselectConfirmationCloseTypeTemplate, $emptyNewTradeTemplate } from 'src/app/shared/templates/new-trade-modal-form.template';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-new-trade-modal-form',
  templateUrl: './new-trade-modal-form.component.html',
  styleUrls: ['./new-trade-modal-form.component.scss']
})
export class NewTradeModalFormComponent implements OnInit, $ComponentTemplateClass {
  public imageLink: string = null;
  closeTypeCombobox: $ComboOptionsDataSource = $emptyComboboxCloseTypeTemplate;
  confirmationCombobox: $ComboOptionsDataSource = $emptyMultiselectConfirmationCloseTypeTemplate;
  constructor() { }
  @Input('value') public value: $UserTradeOperationType = $emptyNewTradeTemplate;
  @Input('tradingPlanRules') public tradingPlanRules: $UserTradingPlanType;
  @Output() onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;

  public emitComponentEvent(eventName: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: this.value })
  }

  ngOnInit(): void {
    this.value.id = uuidv4();
    if (!!this.tradingPlanRules) {
      this.confirmationCombobox.options = this.tradingPlanRules?.entryCheckList.map((c: string) => {
        return { id: c, value: c, isSelected: false, isDisabled: false }
      })
    }
    console.log(this.value)
  }
  public onSaveButtonClick(): void {
    this.emitComponentEvent("onTradingPlanEditorSaveChanges");
  }

  public onDestroyButtonClick(): void {
    this.emitComponentEvent("onDestroyWindow");
  }
  public canActivateSaveButton() { return true }
}
