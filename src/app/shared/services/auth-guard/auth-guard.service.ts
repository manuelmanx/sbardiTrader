import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { from, Observable, zip } from 'rxjs';
import { first } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  private _loggedUser: Observable<any>
  private _userInfo: any;
  constructor(
    private _configService: ConfigService,
    private _afAuth: AngularFireAuth,
    private _afs: AngularFirestore,
    private _router: Router
  ) { }

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
      zip(this._configService.downloadConfig$(), this.checkForUserLoggedInAnChangeRoute$()).subscribe(
        success => {
          resolve(true)
        },
        error => {
          reject(error)
        }
      )
    })
  }

  public async checkForUserLoggedInAnChangeRoute$(): Promise<boolean> {
    this._loggedUser = await this.isLoggedIn();
    return new Promise(resolve => {
      if (this._loggedUser) {
        resolve(true);
      } else {
        this._router.navigate(['/loginpage']);
        resolve(false);
      }

    })
  }

  public loginWithEmailAndPassword(email: string, password: string): Observable<any> {
    return from(this._afAuth.signInWithEmailAndPassword(email, password))
  }

  public getUserInfo(): Observable<any> {
    return this._loggedUser
  }
  public isLoggedIn(): Observable<any> {
    return from(this._afAuth.authState.pipe(first()).toPromise());
  }

  public signOut(): Observable<any> {
    return from(this._afAuth.signOut());
  }
}

