import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private _authGuardService: AuthGuardService) {
  }
  ngOnInit(): void {

  }
  public getWelcomeMessage(): string {
    return "Hi Bro "
  }

}
