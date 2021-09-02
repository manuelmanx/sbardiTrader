import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $DataCandleInterface, $ForexDataRetrivingParamsInterface, $SystemConfigurationInterface } from '../../interfaces/api-data.dto';

@Injectable()
export class ApiServiceService {
  private _config: $SystemConfigurationInterface;
  private _localChartData: $DataCandleInterface[];
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

  public async downloadConfig$(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._http.get("app/config/config.json").subscribe(
        success => {
          this._config = success as $SystemConfigurationInterface
          resolve(true);
        },
        error => {
          reject(false);
        }
      )
    })
  }

  public async downloadLoacalChartData$(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._http.get("app/config/tmp-data.json").subscribe(
        success => {
          this._localChartData = success as $DataCandleInterface[]
          resolve(true);
        },
        error => {
          reject(false);
        }
      )
    })
  }

  public getLocalChartData(): $DataCandleInterface[] {
    return this._localChartData;
  }
  public getConfig(): $SystemConfigurationInterface {
    return this._config;
  }
}
