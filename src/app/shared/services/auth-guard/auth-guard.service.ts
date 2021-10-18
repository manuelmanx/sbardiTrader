import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { from, Observable, zip } from 'rxjs';
import { first } from 'rxjs/operators';
import { $UserInterface } from '../../interfaces/user.dto';
import { ConfigService } from '../config/config.service';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  private _loggedUser: Observable<$UserInterface>;

  constructor(
    private _configService: ConfigService,
    private _afAuth: AngularFireAuth,
    private _router: Router,
    private injector: Injector
  ) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.init().then(data => {
        resolve(true);
      }).catch(error => {
        console.error(error)
        reject(false);
      });
    })
  }

  public async init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      zip(this._configService.downloadConfig$(), this.checkForUserLoggedInAnChangeRoute$()).subscribe(
        success => {
          resolve(true)
        },
        error => {
          console.error(error)
          reject(false)
        }
      )
    })
  }

  public async checkForUserLoggedInAnChangeRoute$(): Promise<boolean> {
    this._loggedUser = await this.getUserInfoFromDB();
    return new Promise(resolve => {
      if (this._loggedUser) {
        const _injectorDb = this.injector.get<DatabaseService>(DatabaseService);
        _injectorDb.initDB(this._loggedUser);
        resolve(true);
      } else {
        this._changeRoute('/loginpage')
        resolve(false);
      }
    })
  }

  private _changeRoute(route: string): void {
    this._router.navigate([route]);
  }

  public async updateUserDisplayName(newName: string): Promise<any> {
    return (await this._afAuth.currentUser).updateProfile({ displayName: newName })
  }

  public async updateUserPhotoURL(link: string): Promise<any> {
    return (await this._afAuth.currentUser).updateProfile({ photoURL: link })
  }

  public loginWithEmailAndPassword(email: string, password: string): Observable<any> {
    return from(this._afAuth.signInWithEmailAndPassword(email, password))
  }

  public getUserInfo(): Observable<any> {
    return this._loggedUser;
  }

  public getUserInfoFromDB(): Observable<any> {
    return from(this._afAuth.authState.pipe(first()).toPromise());
  }
  // public refreshUserInfoFromDB(): Observable<any> {
  //   return from(this._afAuth.authState.pipe(first()).toPromise());
  // }
  public signOut(): Observable<any> {
    return from(this._afAuth.signOut());
  }
}

