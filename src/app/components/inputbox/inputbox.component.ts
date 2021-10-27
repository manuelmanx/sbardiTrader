import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss']
})
export class InputboxComponent implements OnInit, $ComponentTemplateClass {
  @Input('title') public title: any;
  @Input('placeholder') public placeholder: any = "Inserisci...";
  @Input('value') public value: any;
  @Input('numbersType') public numbersType: "positive" | "negative";
  @Input('type') public type: "number" | "text" = "text";
  @Input('UStyle') public UStyle: "uppercase";
  @Input('id') public id: any;
  @Input('color') public color: string;
  @Input('isDisabled') isDisabled: boolean;
  @Input('tooltip') public tooltip: string;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  constructor() { }

  public emitComponentEvent(): void {
    this.inputValidation();
    this.onComponentEvent.emit({ eventName: "onInputChange", eventData: this.value })
  }

  public ngOnInit(): void {
    this.inputValidation()
    if (!!this.value && !this.isDisabled) {
      this.emitComponentEvent();
    }
  }

  public inputValidation(): void {
    if (this.numbersType === 'negative' && this.value > 0 && this.type === 'number') {
      this.value *= -1;
    }
    if (this.numbersType === 'positive' && this.value < 0 && this.type === 'number') {
      this.value *= -1;
    }
  }

  public getMaxNumber(): number {
    if (this.numbersType === "positive") {
      return null;
    } else {
      return 0;
    }
  }

  public getMinNumber(): number {
    if (this.numbersType === "positive") {
      return 0;
    } else {
      return null;
    }
  }

  public reset(): void {
    this.value = null;
  }

}
