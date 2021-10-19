import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { $ComponentEventType, $ComponentTemplateClass } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit, $ComponentTemplateClass {
  @Input('type') type: string = "default"
  @Input('value') value: number = 80;
  @Input('color') color: string = "default" //default||primary-red||primary-blue
  @Input('title') public title: any;
  public id: any;
  public onComponentEvent: EventEmitter<$ComponentEventType>;

  constructor() { }

  public emitComponentEvent(): void {
    throw new Error('Method not implemented.');
  }

  public ngOnInit(): void {
  }

  public getProgressBarValue(): string {
    return `${this.value}%`
  }

}
