import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $TradePreviewDataSource } from 'src/app/shared/interfaces/trade-preview.dto';

@Component({
  selector: 'app-trade-preview',
  templateUrl: './trade-preview.component.html',
  styleUrls: ['./trade-preview.component.scss']
})
export class TradePreviewComponent implements OnInit, $ComponentTemplateClass {
  @Input('value') public value: $TradePreviewDataSource = exampleDataOpenTrade;
  @Input('type') public type: any;
  @Input('id') public id: any;
  @Input('title') public title: any;
  @Input('color') public color: any;
  @Input('isDisabled') isDisabled: boolean;
  @Input('tooltip') public tooltip: string;
  @Input('isFocused') public isFocused: boolean;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  constructor() { }


  public ngOnInit(): void {
    if (!this.value) {
      console.warn("No data input found for app-trade-preview component.")
    }
    if (!this.value?.percentProfit) {
      this.value.percentProfit = 0;
    }
  }

  public emitComponentEvent(event): void {
    this.onComponentEvent.emit({ eventName: event, eventData: this.value })
  }

  public getProgressValue() {
    const progress: number = (100 / this.value?.percentTarget * this.value?.percentProfit);
    return (progress < 0) ? +(progress * -1)?.toFixed(2) : +progress?.toFixed(2);
  }

  public isInLoss(): boolean {
    return this.value.percentProfit < 0;
  }

  public getProgressBarTheme(): string {
    return this.isInLoss() ? 'primary-red' : 'default';
  }

  public onCloseTradeClick(): void {
    this.emitComponentEvent("onCloseTrade");
  }

  public onPartializeTradeClick(): void {
    this.emitComponentEvent("onPartializeTrade");
  }

  public onDeleteTrade(): void {
    this.emitComponentEvent("onDeleteTrade");
  }

}

const exampleDataOpenTrade: $TradePreviewDataSource = {
  symbol: 'EURGBP',
  percentProfit: 0.4,
  id: '024dacawqwqfvzZZX8',
  partial: 3,
  percentTarget: 5,
  ongoing: true,
  date: new Date(),
}

const exampleDataClosedTrade: $TradePreviewDataSource = {
  symbol: 'EURGBP',
  percentProfit: -2.6,
  id: '024dacawqwqddaszZZX41',
  partial: 3,
  percentTarget: 5,
  ongoing: false,
  closeType: "Stop Loss",
  date: new Date()
}