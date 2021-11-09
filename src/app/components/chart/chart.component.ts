import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input('labels') public labels: Label[] = ['0', '0'];
  @Input('data') public data: ChartDataSets[] = [{ data: [0, 0], label: "data" }];
  @ViewChild('canvas') private _canvas: HTMLCanvasElement;
  public lineChartOptions: ChartOptions;
  public lineChartColors: Color[];
  public lineChartLegend;
  public lineChartPlugins;
  public lineChartType: string;
  constructor() {
    this.lineChartOptions = {
      responsive: true,
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
      }
    };

    this.lineChartColors = [
      {
        backgroundColor: 'rgba(41,98,255,0.3)',
        borderColor: 'rgba(41,98,255,1)',
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'white',
        pointHoverBorderWidth: 2,

      }
    ];
    this.lineChartLegend = false;
    this.lineChartType = 'line';
    this.lineChartPlugins = [
    ];
  }


  ngOnInit(): void {
  }

  public chartClicked(event): void {
    console.log(event);
  }

  downloadCanvas(event) {
    const url = document.getElementsByTagName('canvas')[0].toDataURL();
    const filename = "test.jpg";
    let a: any = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => console.error("error"));
  }

}
