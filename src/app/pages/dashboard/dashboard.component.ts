import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { ChartComponent } from 'src/app/components/chart/chart.component';
import { $MomentClass, $TimeFrameEnum } from 'src/app/shared/classes/moment.class';
import { $UserTradeOperationType } from 'src/app/shared/interfaces/database.dto';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private _timeFrame: $TimeFrameEnum = $TimeFrameEnum['1D'];
  private _momentClass: $MomentClass = new $MomentClass();
  private _startDate: Date;
  public dataList: $UserTradeOperationType[] = [];
  public chartData: ChartDataSets[] = [];
  public chartLabels: Label[] = [];
  public globalProfit: number;
  private _$dataSubscribtion: Subscription = null;
  @ViewChild('equityChart') private _equityChart: ChartComponent;
  constructor(private _db: DatabaseService) {
    this._startDate = this._momentClass.getStartDate(this._timeFrame);
    this._db.getCurrentGlobalProfit().subscribe((data: number) => {
      this.globalProfit = data;
    })
  }

  ngOnInit(): void {
    this._$dataSubscribtion = this._db.getTradeListByStartDate(this._startDate).subscribe((data: $UserTradeOperationType[]) => {
      if (data) {
        this.dataList = data;
        this.chartData = [{ data: this?.dataList.map(e => +e?._deltaPercentProfit?.toFixed(2)) || [], label: "data" }];
        this.chartLabels = this?.dataList.map(e => new Date(e?.date).toDateString());
      }
    });
  }

  public getTimeframe(): string {
    return `${this._timeFrame}`;
  }

  public changeTimeFrame(tf: string) {
    if (!!this._$dataSubscribtion) this._$dataSubscribtion.unsubscribe();
    this._timeFrame = $TimeFrameEnum[tf];
    this._startDate = this._momentClass.getStartDate(this._timeFrame);
    this._$dataSubscribtion = this._db.getTradeListByStartDate(this._startDate).subscribe((data: $UserTradeOperationType[]) => {
      if (data) {
        this.dataList = data;
        this.chartData = [{ data: this?.dataList.map(e => +e?._deltaPercentProfit?.toFixed(2)) || [], label: "data" }];
        this.chartLabels = this?.dataList.map(e => new Date(e?.date).toDateString());
      }
    });
  }
  public downloadEquidtyImage(event): void {
    this._equityChart.downloadCanvas(event);
  }
}
