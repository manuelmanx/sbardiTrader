import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
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
  public isFirstLogin: boolean = false;
  public accountSetupChecklist: $AccountSetupCheckListType;
  private _uploadImageSubscription: Subscription;
  private _tradingPlanRules: $UserTradingPlanType;
  constructor(private _authGuardService: AuthGuardService, private _db: DatabaseService, private _router: Router) {

  }

  public async ngOnInit(): Promise<void> {
    await this._authGuardService.getUserInfoFromDB().subscribe(user => {
      if (!user) {
        this._router.navigate(['/loginpage'])
      }
    })

    this._authGuardService.getUserInfo().subscribe(data => {
      if (data) {
        this.userDetails = data;
        console.log(data)
        if (!!this._db) {
          this._setupAccountConfigurationChecklist();
        }
      }
    })

    this._db.onLoadingData.subscribe((data: boolean) => {
      this.isLoadingData = data;
      if (data === false) {
        this._setupAccountConfigurationChecklist();
      }
    });
    this._db.onIsFirstLogin.subscribe((data: boolean) => {
      this.isFirstLogin = data;
    })
  }

  private async _setupAccountConfigurationChecklist(): Promise<void> {
    this._db.getUserTradingPlan()?.subscribe(data => {
      this.accountSetupChecklist = {
        displayName: !!this.userDetails?.displayName,
        emailVerification: this.userDetails?.emailVerified,
        photoURL: !!this.userDetails?.photoURL,
      }
      async () => {
        setTimeout(() => {
          this._tradingPlanRules = data;
          this.accountSetupChecklist.tradingPlan = (!!data) ? true : false;
        }, 500)
      }
    })
  }

  public isAccountSetupComplete(): boolean {
    if (!!this.accountSetupChecklist) {
      return !Object.keys(this.accountSetupChecklist).find(key => !this.accountSetupChecklist[key]);
    } else {
      return false
    }
  }

  public getUserName(): string {
    if (this.userDetails) {
      if (this.userDetails?.displayName) {
        return this.userDetails?.displayName;
      } else {
        return this.userDetails?.email;
      }
    }
  }

  public onUserImageSelect(event): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("thumbnail", file);
      if (!this._uploadImageSubscription)
        this._uploadImageSubscription = this._db.uploadUserAccountImage(file).snapshotChanges().subscribe(data => {
          const url = data?.ref?._delegate?._location?.path;
          this._authGuardService.updateUserPhotoURL(url).then(success => {
            console.log("updated image")
            if (!!this._uploadImageSubscription) {
              this._uploadImageSubscription.unsubscribe();
            }
            this._setupAccountConfigurationChecklist();
          });
        })
    }
  }

  public onUpdateDisplayName(): void {
    let inputPrompt = prompt("Inserisci il tuo nickname", "");
    if (inputPrompt == null || inputPrompt == "") {
      console.error("User cancelled the prompt.");
    } else {
      this._authGuardService.updateUserDisplayName(inputPrompt).then(success => {
        console.log("updatedDisplayName")
        this._uploadImageSubscription.unsubscribe();
        this._setupAccountConfigurationChecklist();
      })
    }
  }

  public onAddTradingPlan(): void {

  }
}
