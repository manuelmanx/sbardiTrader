import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { $ComponentEventType } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input('title') public title: any;
  @Input('placeholder') public placeholder: any = "Inserisci testo...";
  @Input('value') public value: string;
  @Input('id') public id: any;
  @Input('color') public color: string;
  @Input('isDisabled') isDisabled: boolean;
  @Input('tooltip') public tooltip: string;
  @Output() public onComponentEvent: EventEmitter<$ComponentEventType> = new EventEmitter<$ComponentEventType>();

  constructor() { }

  public emitComponentEvent(): void {
    //console.log(this.value)
    this.onComponentEvent.emit({ eventName: "onInputChange", eventData: this.value })
  }

  public ngOnInit(): void {
    if (!!this.value && !this.isDisabled) {
      this.emitComponentEvent();
    }
  }
  public ngOnChanges(): void {
    this.onComponentEvent.emit({ eventName: "onInputChange", eventData: this.value });
  }

  public reset(): void {
    this.value = null;
  }

}
