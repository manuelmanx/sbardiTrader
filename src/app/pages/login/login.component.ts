import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { SlaveService } from 'src/app/shared/services/slave/slave.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  public isPasswordVisible: boolean = false;
  constructor(private _authGuardService: AuthGuardService, private _router: Router, private _db: DatabaseService, private _slave: SlaveService) {
  }

  async ngOnInit(): Promise<void> {
    await this._authGuardService.getUserInfoFromDB().subscribe(user => {
      if (user) {
        this._router.navigate(['/homepage'])
      }
    })
  }

  public login(): void {
    this._authGuardService.loginWithEmailAndPassword(this.email, this.password).subscribe(
      success => {
        this._router.navigate(['/homepage'])
      },
      error => {
        console.log(error);
        this._slave.showSnackbar({ title: "Errore!", subtitle: error?.message, autoDestroySeconds: 3 })
      }
    )
  }
  public showHidePassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
