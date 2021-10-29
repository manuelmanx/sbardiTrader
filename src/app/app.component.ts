import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { $ComponentEventType } from './shared/classes/component-template.class';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isCalculatorOpened: boolean = false;
  constructor(private _authGuardService: AuthGuardService, private _router: Router) {
    this._authGuardService.init()
  }
  public logout() {
    this._authGuardService.signOut().subscribe(
      success => {
        this._router.navigate(['/loginpage']);
      },
      error => {
        console.error(error);
      }
    )
  }

  public isLoginPage(): boolean {
    return this._router.url === "/loginpage";
  }
  public openCalculator(): void {
    this.isCalculatorOpened = !this.isCalculatorOpened;
  }
  public catchCalculatorEvents(event: $ComponentEventType) {
    switch (event.eventName) {
      case "onCloseCalculatorModal":
        this.isCalculatorOpened = false;
        break;
    }
  }
}