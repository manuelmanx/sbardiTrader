import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
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
  public chartData = [];
  public chartLabels = []
  constructor(private _db: DatabaseService) {
    this._startDate = this._momentClass.getStartDate(this._timeFrame);
  }

  ngOnInit(): void {
    this._db.getTradeListByStartDate(this._startDate).subscribe((data: $UserTradeOperationType[]) => {
      if (data) {
        this.dataList = data;
        this.chartData = [{ data: this?.dataList.map(e => +e?._deltaPercentProfit.toFixed(2)) || [] }];
        this.chartLabels = this?.dataList.map(e => new Date(e?.date).toDateString());
      }
    });
  }

}
