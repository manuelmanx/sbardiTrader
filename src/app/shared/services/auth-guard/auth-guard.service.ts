import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { ApiServiceService } from '../api-service/api-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _apiService: ApiServiceService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.init().then(data => {
        resolve(true);
      }).catch(error => {
        reject(false);
        throw new Error("There was an error downloading the configuration.");
      });
    })
  }

  public async init(): Promise<any> {
    return new Promise((resolve, reject) => {
      zip(this._apiService.downloadConfig$(), this._apiService.downloadLoacalChartData$()).subscribe(
        success => {
          resolve(success)
        },
        error => {
          reject(error)
        }
      )
    })

  }
}
