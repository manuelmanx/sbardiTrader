import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
import { $emptyTradingPlanTemplate } from 'src/app/shared/templates/trading-pan.template';

@Component({
  selector: 'app-tradingplan-editor',
  templateUrl: './tradingplan-editor.component.html',
  styleUrls: ['./tradingplan-editor.component.scss']
})
export class TradingplanEditorComponent implements OnInit, $ComponentTemplateClass {
  @Input('value') public value: $UserTradingPlanType;

  constructor() { }
  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  public emitComponentEvent(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    if (!this.value) {
      this.value = $emptyTradingPlanTemplate;
    }
  }

}
