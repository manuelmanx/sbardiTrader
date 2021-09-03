import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { $DataCandleInterface } from 'src/app/shared/interfaces/api-data.dto';
import { $ChartOptionsInterface } from 'src/app/shared/interfaces/sbardi-chart.component.dto';

@Component({
  selector: 'sbardi-chart',
  templateUrl: './sbardi-chart.component.html',
  styleUrls: ['./sbardi-chart.component.scss']
})
export class SbardiChartComponent implements OnInit {
  @Input("dataSource") dataSource: $DataCandleInterface[];
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<$ChartOptionsInterface>;

  constructor() {

  }

  ngOnInit(): void {
  }
}
