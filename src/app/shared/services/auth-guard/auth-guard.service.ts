import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable, zip } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _configService: ConfigService, private _afAuth: AngularFireAuth) { }

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

  public loginWithEmailAndPassword(email: string, password: string): Observable<any> {
    return from(this._afAuth.signInWithEmailAndPassword(email, password))
  }
}
