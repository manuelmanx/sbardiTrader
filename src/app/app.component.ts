import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _authGuardService: AuthGuardService, private _router: Router,) { }
  public logout() {
    this._authGuardService.signOut().subscribe(
      success => {
        this._router.navigate(['/loginpage']);
      },
      error => {
        console.log(error);
      }
    )
  }

  isLoginPage(): boolean {
    return this._router.url === "/loginpage";
  }
}