import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  public isPasswordVisible: boolean = false;
  constructor(private _authGuardService: AuthGuardService) { }

  ngOnInit(): void {
  }
  public login(): void {
    console.log(this.email, this.password)
    this._authGuardService.loginWithEmailAndPassword(this.email, this.password).subscribe(
      success => {
        console.log(success)
      },
      error => {
        console.log(error)
      }
    )
  }
}
