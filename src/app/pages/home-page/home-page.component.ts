import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { $ComponentEventType } from 'src/app/shared/classes/component-template.class';
import { $UserTradeOperationType, $UserTradingPlanType } from 'src/app/shared/interfaces/database.dto';
import { $AccountSetupCheckListType, $UserInterface } from 'src/app/shared/interfaces/user.dto';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { $HomePageLeftTabsTemplate } from 'src/app/shared/templates/home-page.template';

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
  private _tradingPlanRules: $UserTradingPlanType = null;
  private _ongoingTrades: $UserTradeOperationType[] = [];
  private _closedTradesList: $UserTradeOperationType[] = [];
  private _todayTrades: $UserTradeOperationType[] = [];
  public showTradingPlanModal: boolean = false;
  public showNewTradeModal: boolean = false;
  public showPartializeTradeModal: boolean = false;
  public showCloseTradeModal: boolean = false;

  public tradeToPartialize: $UserTradeOperationType = null;
  public tradeToClose: $UserTradeOperationType = null;
  public canIRegisterNewTrade = true;
  public leftTabsDataTemplate = $HomePageLeftTabsTemplate;
  public globalProfit: number;
  private _activeTab = this.leftTabsDataTemplate[0].key;
  constructor(private _authGuardService: AuthGuardService, private _db: DatabaseService, private _router: Router) {

  }

  public onActiveTabChange(key: string): void {
    this._activeTab = key;
  }
  public getActiveTab(): string {
    return this._activeTab;
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
        if (!!this._db) {
          this._setupAccountConfigurationChecklist();
        }
      }
    })

    this._db.onLoadingData.subscribe((data: boolean) => {
      this.isLoadingData = data;
      if (data === false) {
        this._setupAccountConfigurationChecklist();
        this._db.getUserOngoingTradeList().subscribe(data => {
          this._ongoingTrades = data;
        })
        this._db.getUserClosedTrades()?.subscribe(data => {
          this._closedTradesList = data;
        })
        this._db.getTodayTrades()?.subscribe(data => {
          this._todayTrades = data;
        })
        this._db.getCurrentGlobalProfit().subscribe((data: number) => {
          this.globalProfit = data;
        })
      }
    });

    this._db.onIsFirstLogin.subscribe((data: boolean) => {
      this.isFirstLogin = data;
    });


  }

  private async _setupAccountConfigurationChecklist(): Promise<void> {
    this._db.getUserTradingPlan()?.subscribe(data => {
      this.accountSetupChecklist = {
        displayName: !!this.userDetails?.displayName,
        photoURL: !!this.userDetails?.photoURL,
      }
      this._tradingPlanRules = data;
      this.accountSetupChecklist.tradingPlan = (!!data) ? true : false;
    })
  }
  public getTradingRulesData(): $UserTradingPlanType {
    return this._tradingPlanRules;
  }
  public getOngoingTrades(): $UserTradeOperationType[] {
    return this._ongoingTrades;
  }
  public getLastClosedTrades(): $UserTradeOperationType[] {
    return this._closedTradesList;
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
  public getUserAccountImage(): string {
    if (this.userDetails) {
      return this.userDetails?.photoURL;
    }
  }
  public onUserImageSelect(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("thumbnail", file);
      if (!this._uploadImageSubscription)
        this._uploadImageSubscription = this._db.uploadUserAccountImage(file).snapshotChanges().subscribe(data => {
          const url = data?.ref?._delegate?._location?.path;
          this._db.getDownloadFileUrl(url).then(data => {
            console.log("image link", data)
            this._authGuardService.updateUserPhotoURL(data).then(success => {
              console.log("updated image")
              if (!!this._uploadImageSubscription) {
                this._uploadImageSubscription.unsubscribe();
              }
              this._setupAccountConfigurationChecklist();
            });
          })

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
    this.showTradingPlanModal = true;
  }
  public onTradingPlanEditorEvent(event: $ComponentEventType): void {
    switch (event?.eventName) {
      case "onTradingPlanEditorSaveChanges":
        this._saveTradingPlanRules(event.eventData).then(success => {
          this.showTradingPlanModal = false;
        });
        break;
      case "onDestroyWindow":
        this.showTradingPlanModal = false;
        break;
    }
  }
  private _saveTradingPlanRules(data: $UserTradingPlanType): Promise<void> {
    return this._db.setTradingPlanRules(data)
  }

  public onAddNewTrade(): void {
    this.showNewTradeModal = true;
  }
  public onNewTradeModalEvent(event) {
    switch (event?.eventName) {
      case "onTradingPlanEditorSaveChanges":
        this._saveNewGeneratedTrade(event.eventData).then(success => {
          if (!!event?.eventData?._deltaPercentProfit) {
            const p: number = +event?.eventData?._deltaPercentProfit.toFixed(2);
            this._db.updateGlobalProfit(p)
          }
          this.showNewTradeModal = false;
        });
        break;
      case "onDestroyWindow":
        this.showNewTradeModal = false;
        break;
    }
  }
  private _saveNewGeneratedTrade(data: any): Promise<void> {
    return this._db.registerNewTrade(data)
  }

  public getPercentageOfDailyTrades(): number {
    const progress = 100 * this._todayTrades?.length / this._tradingPlanRules?.maxDailyTrades;
    if (progress < 100) {
      this.canIRegisterNewTrade = true;
    } else if (progress >= 100) {
      this.canIRegisterNewTrade = false;
    }
    return progress;
  }

  public getDailyTradesLengthString(): string {
    return `${this._todayTrades?.length}` || '';
  }

  public getDailyTradesLimitString(): string {
    return `di ${this._tradingPlanRules.maxDailyTrades}` || ''
  }

  public getLast100TradesWinrate(): number {
    const profit = this._closedTradesList?.filter(trade => trade?.percentProfit > 0);
    const loss = this._closedTradesList?.filter(trade => trade?.percentProfit < 0);
    return Math.round(profit?.length / (profit?.length + loss?.length) * 100) || 0;
  }

  public catchOngoingTradeEvent(event: $ComponentEventType): void {
    switch (event?.eventName) {
      case "onPartializeTrade":
        this.tradeToPartialize = event.eventData;
        this.showPartializeTradeModal = true;
        break;
      case "onCloseTrade":
        this.tradeToClose = event.eventData;
        this.showCloseTradeModal = true;
        break;
    }
  }
  public onPartializeTradeModalEvent(event): void {
    switch (event?.eventName) {
      case "onDestroyWindow":
        this.showPartializeTradeModal = false;
        this.tradeToPartialize = null;
        break;
      case "onPartializeSave":
        this._db.updateTradeValue(event?.eventData).then(success => {
          this.showPartializeTradeModal = false;
          this.tradeToPartialize = null;
        })
        break;
    }
  }
  public onCloseTradeModalEvent(event): void {
    switch (event?.eventName) {
      case "onDestroyWindow":
        this.showCloseTradeModal = false;
        this.tradeToClose = null;
        break;
      case "onCloseTradeSave":
        this._db.updateTradeValue(event?.eventData).then(success => {
          this.showCloseTradeModal = false;
          this.tradeToClose = null;
          const p: number = +event?.eventData?._deltaPercentProfit.toFixed(2);
          this._db.updateGlobalProfit(p)
        })
        break;
    }
  }
  public getProfitPercentage(): number {
    if (!this._closedTradesList?.length) return NaN;
    return +this._closedTradesList?.map(e => e?.percentProfit)?.reduce((tot, num) => {
      return tot + num;
    })?.toFixed(2);
  }
}
