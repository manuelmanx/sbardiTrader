import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _configService: ConfigService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.init().then(data => {
        resolve(true);
      }).catch(error => {
        reject(false);
      });
    })
  }

  public async init(): Promise<any> {
    return new Promise((resolve, reject) => {
      zip(this._configService.downloadConfig$()).subscribe(
        success => {
          resolve(true)
        },
        error => {
          reject(error)
        }
      )
    })
  }
}
