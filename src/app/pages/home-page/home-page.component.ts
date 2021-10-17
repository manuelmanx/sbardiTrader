import { Component, OnInit } from '@angular/core';
import { $TradePreviewDataSource } from 'src/app/shared/interfaces/trade-preview.dto';
import { $UserInterface } from 'src/app/shared/interfaces/user.dto';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public userDetails: $UserInterface;
  public isLoadingData: boolean = true;

  constructor(private _authGuardService: AuthGuardService) {
  }

  ngOnInit(): void {
    this._authGuardService.getUserInfo().subscribe(data => {
      if (data) {
        this.userDetails = data;
      }
    })
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
