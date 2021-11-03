import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $TabsDataSourceType } from 'src/app/shared/interfaces/components.dto';
import { $calculatorTabsTemplate } from 'src/app/shared/templates/calculator.template';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, $ComponentTemplateClass {
  public countSize: number = null;
  public profitSize: number = null;
  constructor() { }
  public title: any;
  public value: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public tooltip: any;
  public tabsOptions: $TabsDataSourceType[] = $calculatorTabsTemplate;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  public emitComponentEvent(eventName?: string): void {
    this.onComponentEvent.emit({ eventName: eventName, eventData: null })
  }

  ngOnInit(): void {
  }

  getProfitPercentage(): number {
    const profit: number = 100 / this.countSize * this.profitSize;
    return Number(profit.toFixed(2))
  }
  public catchModalEvent(event: $ComponentEventType) {
    switch (event?.eventName) {
      case "onCloseDraggableModal":
        this.emitComponentEvent("onCloseCalculatorModal");
        break;
    }
  }
}
