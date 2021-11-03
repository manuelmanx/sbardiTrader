import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { $SnackBarDataSourceType } from '../../interfaces/components.dto';

@Injectable({
  providedIn: 'root'
})
export class SlaveService {
  private _snackBarSubject: BehaviorSubject<$SnackBarDataSourceType> = new BehaviorSubject<$SnackBarDataSourceType>(null)
  private _snackbarSubscription: boolean = false;
  public onSnackbarChanges: Observable<$SnackBarDataSourceType> = this._snackBarSubject.asObservable();
  constructor() { }

  public showSnackbar(data: $SnackBarDataSourceType): void {
    if (data.autoDestroySeconds) {
      if (!this._snackbarSubscription) {
        this._snackbarSubscription = true;
        this._snackBarSubject.next(data);
        setTimeout(() => {
          this._snackBarSubject.next(null);
          this._snackbarSubscription = false;
        }, data?.autoDestroySeconds * 1000);

      }
    } else {
      this._snackBarSubject.next(data);
    }
  }

  public destroySnackbar() {
    this._snackBarSubject.next(null);
    this._snackbarSubscription = false;
  }
}
