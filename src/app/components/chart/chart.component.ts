import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input('labels') public labels: Label[] = [];
  @Input('data') public data: ChartDataSets[] = [{ data: [] }];
  constructor() { }


  ngOnInit(): void {
  }



  // Define chart options
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
    }
  };

  // Define colors of chart segments
  public lineChartColors: Color[] = [
    {
      // red
      backgroundColor: 'rgba(41,98,255,0.3)',
      borderColor: 'rgba(41,98,255,1)',
      pointRadius: 3,
      pointHoverRadius: 3,
      pointBackgroundColor: 'white',
      pointBorderWidth: 2,

    }
  ];

  // Set true to show legends
  public lineChartLegend = false;

  // Define type of chart
  public lineChartType = 'line';

  public lineChartPlugins = [];

  // events
  public chartClicked(event): void {
    console.log(event);
  }

}
