import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { $DataCandleInterface } from '../../interfaces/api-data.dto';
import { $I18nInterface, $SystemConfigurationInterface } from '../../interfaces/config.dto';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: $SystemConfigurationInterface;
  constructor(private _http: HttpClient) { }

  public async downloadConfig$(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._http.get("app/config/config.json").subscribe(
        (success: $SystemConfigurationInterface) => {
          this._config = success;
          zip(this._downloadTranslations$()).subscribe(
            success => { resolve(true) },
            error => { reject(false) }
          )
        },
        error => {
          reject(false);
          this.throwError(error)
        }
      )
    })
  }

  private _downloadTranslations$(): Promise<boolean> {
    const lan = this._config?.language;
    return new Promise((resolve, reject) => {
      this._http.get(`assets/i18n/${lan}.json`).subscribe(
        (success: $I18nInterface[]) => {
          this._config.i18n = success;
          resolve(true)
        },
        error => {
          reject(false)
          this.throwError(error)
        }
      )
    })
  }


  public getConfig(): $SystemConfigurationInterface {
    return this._config;
  }


  public throwError(error: any) {
    console.error(error?.message);
  }
}
