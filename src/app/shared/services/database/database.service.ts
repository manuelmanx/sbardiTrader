import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { $UserTradeOperationType, $UserTradingPlanType } from '../../interfaces/database.dto';
import { $UserInterface } from '../../interfaces/user.dto';
import { AuthGuardService } from '../auth-guard/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _userInfo: $UserInterface;
  private _userTradeList: AngularFireList<$UserTradeOperationType>;
  private _userTradingPlan: AngularFireObject<$UserTradingPlanType>;
  private _userPath: string;
  private _$isFirstLogin = new BehaviorSubject<boolean>(false);
  public onIsFirstLogin = this._$isFirstLogin.asObservable();
  private _$isLoadingData = new BehaviorSubject<boolean>(true);
  public onLoadingData = this._$isLoadingData.asObservable();

  constructor(private _authGuardService: AuthGuardService, private _af: AngularFireDatabase) {
    this._authGuardService.getUserInfo().subscribe((data: $UserInterface) => {
      if (data) {
        this._userInfo = data;
        this._userPath = `users/${this._userInfo?.uid}`
      }
    })
    this._authGuardService.onTriggerRoute.subscribe(data => {
      this.initDB();
    })
  }

  public initDB(): void {
    console.log("downloading data....")
    if (this._userInfo) {
      this._af.database.ref(`${this._userPath}/lastLogin`).once("value", snapshot => {
        if (snapshot.exists()) {
          //console.log("userExist")
          this._loadUserData();
        } else {
          //console.error("userNotFound!")
          this._$isFirstLogin.next(true);
          this._createNewUserDbPath();
        }
      })
    }
  }

  private _loadUserData(): void {
    //console.log("loadingUserData")
    this._userTradeList = this._af.list(`${this._userPath}/tradeList`);
    this._userTradingPlan = this._af.object(`${this._userPath}/tradingPlan`);
    this._$isLoadingData.next(false);
  }

  public getUserTradingPlan(): Observable<$UserTradingPlanType> {
    return this._userTradingPlan.valueChanges();
  }

  public getUsertradeList(): Observable<$UserTradeOperationType[]> {
    return this._userTradeList.valueChanges();
  }

  private _createNewUserDbPath(): void {
    this._af.object(`${this._userPath}/lastLogin`).set(`${new Date().toISOString()}`).then(data => {
      this._loadUserData();
    })
  }
}
