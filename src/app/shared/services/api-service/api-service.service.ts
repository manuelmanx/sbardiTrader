import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $DataCandleInterface, $ForexDataRetrivingParamsInterface } from '../../interfaces/api-data.dto';
import { ConfigService } from '../config/config.service';
//**https://financialmodelingprep.com/developer/docs#Historical-Forex-Price
//**https://codesandbox.io/s/apx-candlestick-line-combo-forked-3q0se?file=/src/app/app.component.ts 
//**https://apexcharts.com/angular-chart-demos/candlestick-charts/candlestick-with-line/    
//**Esempio Grafico */

@Injectable()
export class ApiServiceService {

  constructor(private _http: HttpClient, private _configService: ConfigService) { }

  public async getHistoricalChartData(params: $ForexDataRetrivingParamsInterface): Promise<$DataCandleInterface[]> {
    let apiKey = this._configService.getConfig().apiKey
    return new Promise((resolve, reject) => {
      this._http.get(`https://financialmodelingprep.com/api/v3/historical-chart/${params?.timeframe}/${params?.pair}?apikey=${apiKey}`).subscribe(
        (success: $DataCandleInterface[]) => {
          resolve(success);
        },
        error => {
          reject(error);
          this._configService.throwError(`${error}`)
        }
      )
    })
  }

}
