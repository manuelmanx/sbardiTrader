import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
import { $TradePreviewDataSource } from 'src/app/shared/interfaces/trade-preview.dto';
import { $AccountSetupCheckListType, $UserInterface } from 'src/app/shared/interfaces/user.dto';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';
import { DatabaseService } from 'src/app/shared/services/database/database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public userDetails: $UserInterface;
  public isLoadingData: boolean = true;
  public isAccountSetupComplete: boolean = false;
  private _accountConfigurationChecklist: $AccountSetupCheckListType;
  public isFirstLogin: boolean = false;
  constructor(private _authGuardService: AuthGuardService, private _db: DatabaseService) {

  }

  ngOnInit(): void {
    this._authGuardService.getUserInfo().subscribe(data => {
      if (data) {
        this.userDetails = data;
      }
    })

    this._db.onLoadingData.subscribe((data: boolean) => {
      this.isLoadingData = data;
      this._setupAccountConfigurationChecklist();
    });
    this._db.onIsFirstLogin.subscribe((data: boolean) => {
      this.isFirstLogin = data
    })
  }

  private _setupAccountConfigurationChecklist(): void {
    //compose observable checklist
  }
  public getUserName(): string {
    if (this.userDetails) {
      if (this.userDetails?.displayName) {
        return this.userDetails?.displayName;
      } else {
        return this.userDetails?.email;
      }
    } else {
    }
  }



}
