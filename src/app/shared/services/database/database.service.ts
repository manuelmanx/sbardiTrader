import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, from, Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { $UserTradeOperationType, $UserTradingPlanType } from '../../interfaces/database.dto';
import { $UserInterface } from '../../interfaces/user.dto';

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
  private _userSubscription: Subscription;
  constructor(private _af: AngularFireDatabase, private _as: AngularFireStorage) {
  }

  public initDB(user: Observable<$UserInterface>): void {
    if (!this._userSubscription) {
      console.log("Fetching data...")
      this._userSubscription = user.subscribe(data => {
        this._userInfo = data;
        if (this._userInfo) {
          this._setUpUserPath()
          this._af.database.ref(`${this._userPath}/lastLogin`).once("value", snapshot => {
            if (snapshot.exists()) {
              this._loadUserData();
            } else {
              this._$isFirstLogin.next(true);
              this._createNewUserDbPath();
            }
          })
        }
      })
    }
  }
  private _setUpUserPath(): void {
    this._userPath = `users/${this._userInfo?.uid}`
  }

  private _loadUserData(): void {
    this._userTradeList = this._af.list(`${this._userPath}/tradeList`);
    this._userTradingPlan = this._af.object(`${this._userPath}/tradingPlan`);
    console.log("User data successfully loaded...");
    this._$isLoadingData.next(false);
  }

  public getUserTradingPlan(): Observable<$UserTradingPlanType> {
    return this._userTradingPlan?.valueChanges();
  }

  public getUsertradeList(): Observable<$UserTradeOperationType[]> {
    return this._userTradeList.valueChanges();
  }

  private _createNewUserDbPath(): void {
    console.log("Creating user database path...");
    this._af.object(`${this._userPath}/lastLogin`).set(`${new Date().toISOString()}`).then(data => {
      this._loadUserData();
    })
  }

  public uploadUserAccountImage(image: any): any {
    return this._as.upload(`${this._userPath}/accountImage`, image);
  }
}
