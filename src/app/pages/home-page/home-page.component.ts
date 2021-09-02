import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { $DataCandleInterface, $ForexDataRetrivingParamsInterface, $ForexTimeframeEnum } from 'src/app/shared/interfaces/api-data.dto';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  public callParams: $ForexDataRetrivingParamsInterface = { pair: "EURUSD", timeframe: $ForexTimeframeEnum['15min'], apikey: "e821fab50c2e78d7c3702a947a0750d6" }
  ngOnInit(): void {

  }

  // public getHistoricalChartData(params: $ForexDataRetrivingParamsInterface = this.callParams) {
  //   this._http.get(`https://financialmodelingprep.com/api/v3/historical-chart/${params["timeframe"]}/${params["pair"]}?apikey=${params["apikey"]}`).subscribe(
  //     success => {
  //       console.log(success as $DataCandleInterface[]);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }
}
