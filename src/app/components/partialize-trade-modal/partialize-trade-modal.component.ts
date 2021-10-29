import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $UserTradeOperationType } from 'src/app/shared/interfaces/database.dto';

@Component({
  selector: 'app-partialize-trade-modal',
  templateUrl: './partialize-trade-modal.component.html',
  styleUrls: ['./partialize-trade-modal.component.scss']
})
export class PartializeTradeModalComponent implements OnInit, $ComponentTemplateClass {

  constructor() { }
  public title: any;
  @Input('value') public value: $UserTradeOperationType = {
    symbol: "nessuna",
    id: '',
    partial: null,
    date: '',
    ongoing: false,
    percentProfit: null,
  };
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public tooltip: any;
  public isLoading: boolean = false;
  public tmpProfit: number = 0;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  public emitComponentEvent(eventName?: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: this.value });
  }

  ngOnInit(): void {
  }
  public onSaveButtonClick(): void {
    this.isLoading = true;
    this._parseValueOnSave();
    this.emitComponentEvent("onPartializeSave");
  }

  private _parseValueOnSave(): void {
    if (!!this.value?.percentProfit) {
      this.value.percentProfit += this.tmpProfit;
    } else {
      this.value.percentProfit = this.tmpProfit;
    }
    if (!!this.value.partial) {
      this.value.partial += 1;
    } else {
      this.value.partial = 1;
    }
  }
  public onDestroyButtonClick(): void {
    this.emitComponentEvent("onDestroyWindow");
  }
  public canActivateSaveButton() {
    return !!this.tmpProfit;
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
