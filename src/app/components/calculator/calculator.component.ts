import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $CalculatorSetting, $CalculatorTabsType, $TabsDataSourceType } from 'src/app/shared/interfaces/components.dto';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { SlaveService } from 'src/app/shared/services/slave/slave.service';
import { $calculatorTabsTemplate } from 'src/app/shared/templates/calculator.template';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, $ComponentTemplateClass {
  public countSize: { [key: string]: number } = {};
  public profitSize: { [key: string]: number } = {};

  public title: any;
  public value: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public tooltip: any;
  public tabsOptions: $TabsDataSourceType[] = $calculatorTabsTemplate;
  public activeTabName: $CalculatorTabsType = null;
  constructor(private _db: DatabaseService, private _slave: SlaveService) {
    this.tabsOptions.forEach(el => {
      this.countSize[el.key] = null;
      this.profitSize[el.key] = null;
    })
  }
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  public emitComponentEvent(eventName?: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: null })
  }

  ngOnInit(): void {
    this._db.getCalculatorSettings().subscribe((data: $CalculatorSetting) => {
      if (!!data) {
        this.countSize = { ...this.countSize, ...data?.countSize };
        this.profitSize = { ...this.profitSize, ...data?.profitSize };
        this.activeTabName = data?.activeTabName as $CalculatorTabsType || this.tabsOptions[1].key as $CalculatorTabsType;
      }
    })
  }

  public getResult(): number {
    var result: number = null;
    if (this.activeTabName === 'percent_calc')
      result = 100 / this.countSize[this.activeTabName] * this.profitSize[this.activeTabName];
    else if (this.activeTabName === 'value_calc')
      result = this.countSize[this.activeTabName] / 100 * this.profitSize[this.activeTabName]
    return Number(result.toFixed(2))
  }

  public catchModalEvent(event: $ComponentEventType): void {
    switch (event?.eventName) {
      case "onCloseDraggableModal":
        this.emitComponentEvent("onCloseCalculatorModal");
        this._storeChanges();
        break;
    }
  }

  public copyResult(): void {
    const text = `${this.getResult()}`
    navigator.clipboard.writeText(text)
    this._slave.showSnackbar({ title: "Testo Copiato!", autoDestroySeconds: 2 })
    this._storeChanges();
  }

  public onProfitSizeChanges(event: $ComponentEventType): void {
    (!!event.eventData) ? this.profitSize[this.activeTabName] = event?.eventData : null;
  }

  private _storeChanges(): void {
    this._db.updateCalculatorSettings({ profitSize: this.profitSize, countSize: this.countSize, activeTabName: this.activeTabName as $CalculatorTabsType })
  }

  public onCountSizeChanges(event: $ComponentEventType): void {
    (!!event.eventData) ? this.countSize[this.activeTabName] = event?.eventData : null;
  }

  public resetData(): void {
    this.countSize[this.activeTabName] = null;
    this.profitSize[this.activeTabName] = null;
    this._storeChanges();
  }
}
