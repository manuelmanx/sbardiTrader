import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $DataCandleInterface, $ForexDataRetrivingParamsInterface } from '../../interfaces/api-data.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  public async getHistoricalChartData(params: $ForexDataRetrivingParamsInterface): Promise<$DataCandleInterface[]> {
    return new Promise((resolve, reject) => {
      this._http.get(`https://financialmodelingprep.com/api/v3/historical-chart/${params["timeframe"]}/${params["pair"]}?apikey=${params["apikey"]}`).subscribe(
        success => {
          resolve(success as $DataCandleInterface[]);
        },
        error => {
          reject(error);
        }
      )
    })
  }
}
