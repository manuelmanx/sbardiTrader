import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { $ComponentEventType } from 'src/app/shared/classes/component-template.class';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {

  @Input('type') type: string = "default"
  @Input('value') value: number = 80; //percentage Value
  @Input('color') color: string = "default" //default||primary-red||primary-blue
  @Input('title') public title: string;
  @Input('subtitle') public subtitle: string;
  @Input('isDisabled') isDisabled: boolean;
  @Input('tooltip') public tooltip: string;
  public id: any;
  public onComponentEvent: EventEmitter<$ComponentEventType>;

  constructor() {

  }

  public emitComponentEvent(): void {
    throw new Error('Method not implemented.');
  }

  public ngOnInit(): void {
  }

  public getProgressBarValue(): string {
    return `${this.value}%`
  }

  public getRightSideDegree(): string {
    let tot = this.getDegreeFromPercentage();
    if (tot > 180) {
      return `rotate(${tot - 180}deg)`;
    } else {
      return '';
    }
  }
  public getLeftSideDegree(): string {
    let tot = this.getDegreeFromPercentage();
    if (tot > 180) {
      return `rotate(180deg)`;
    } else {
      return `rotate(${tot}deg)`;
    }
  }
  public getDotDegree(): string {
    return `rotate(${this.getDegreeFromPercentage()}deg)`;
  }
  public getDegreeFromPercentage(): number {
    return (360 * this.value) / 100;
  }
}
