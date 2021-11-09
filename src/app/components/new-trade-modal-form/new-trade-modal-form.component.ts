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
  @Input('value') public value: $UserTradeOperationType;
  @Input('tradingPlanRules') public tradingPlanRules: $UserTradingPlanType;
  @Input('globalProfit') private _globalProfit: number;
  @Output() onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  public tooltip: string;
  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public isLoading: boolean = false;
  public emitComponentEvent(eventName: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: this.value })
  }

  ngOnInit(): void {
    if (!this.value) {
      this.value = JSON.parse(JSON.stringify($emptyNewTradeTemplate));
    }
    this.value.id = uuidv4();
    this.value.percentProfit = 0;
    this.value.partial = 0;
    if (!!this.tradingPlanRules) {
      this.confirmationCombobox.options = this.tradingPlanRules?.entryCheckList.map((c: string) => {
        return { id: c, value: c, isSelected: false, isDisabled: false }
      })
      this.value.percentTarget = this.tradingPlanRules.minPercentProfitPerTrade;
      this.value.ongoing = true;
    }
  }

  public onSaveButtonClick(): void {
    this.isLoading = true;
    this.value.symbol = this.value.symbol.toUpperCase();
    if (!this.value?.ongoing) this.value._deltaPercentProfit = this._globalProfit + this.value.percentProfit
    this.emitComponentEvent("onTradingPlanEditorSaveChanges");
  }

  public onDestroyButtonClick(): void {
    this.emitComponentEvent("onDestroyWindow");
  }
  public canActivateSaveButton() {
    let arr = Object.keys(this.value).map(key => {
      if (key == "ongoing") {
        return 'true'
      } else if (key === "checkListElements") {
        return `${!!this.value[key].length}`;
      } else if (key === "closeType" || key === "percentProfit") {
        return (!!this.value["ongoing"]) ? "true" : `${!!this.value[key]}`;
      } else if (key === "partial") {
        return 'true';
      } else {
        return `${!!this.value[key]}`;
      }
    })
    return !arr.find(e => e === "false");
  }

  public catchEvent(event): void {
    switch (event?.eventName) {
      case "onSaveModalClick":
        this.onSaveButtonClick();
        break
      case "onDestroyModalClick":
        this.onDestroyButtonClick();
        break
    }
  }
}
