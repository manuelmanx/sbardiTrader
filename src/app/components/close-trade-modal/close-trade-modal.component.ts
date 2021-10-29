import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType } from 'src/app/shared/classes/component-template.class';
import { $ComboOptionsDataSource } from 'src/app/shared/interfaces/components.dto';
import { $UserTradeOperationType } from 'src/app/shared/interfaces/database.dto';
import { $emptyComboboxCloseTypeTemplate } from 'src/app/shared/templates/new-trade-modal-form.template';

@Component({
  selector: 'app-close-trade-modal',
  templateUrl: './close-trade-modal.component.html',
  styleUrls: ['./close-trade-modal.component.scss']
})
export class CloseTradeModalComponent implements OnInit {
  constructor() { }
  public title: any;
  public closeTypeCombobox: $ComboOptionsDataSource = $emptyComboboxCloseTypeTemplate;
  @Input('value') public value: $UserTradeOperationType = {
    symbol: "nessuna",
    id: '',
    partial: null,
    date: '',
    ongoing: false,
    percentProfit: 0,
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
    this.emitComponentEvent("onCloseTradeSave");
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
    this.value.ongoing = false;
  }
  public onDestroyButtonClick(): void {
    this.emitComponentEvent("onDestroyWindow");
  }
  public canActivateSaveButton() {
    return !!this.tmpProfit && !!this.value?.closeType;
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
