import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';
import { $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
import { $emptyTradingPlanTemplate } from 'src/app/shared/templates/trading-pan.template';
import { InputboxComponent } from '../inputbox/inputbox.component';

@Component({
  selector: 'app-tradingplan-editor',
  templateUrl: './tradingplan-editor.component.html',
  styleUrls: ['./tradingplan-editor.component.scss']
})
export class TradingplanEditorComponent implements OnInit, $ComponentTemplateClass {
  @Input('value') public value: $UserTradingPlanType;
  @ViewChild('checklistInput') private _checkinput: InputboxComponent;
  constructor() { }
  public title: any;
  public type: any;
  public id: any;
  public color: any;
  public isDisabled: any;
  public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();
  public emitComponentEvent(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    if (!this.value) {
      this.value = $emptyTradingPlanTemplate;
    }
  }
  public addChecklistElement(): void {
    if (!!this._checkinput?.value) {
      this.value.entryCheckList.push(this._checkinput?.value)
      this._checkinput.reset();
    }
  }
  public deleteChecklistElement(element: string) {
    this.value.entryCheckList = this.value.entryCheckList.filter(e => e !== element)
  }

  public onSaveButtonClick(): void {
    console.log(this.value)
  }

  public canActivateSaveButton(): boolean {
    return true
  }
}
