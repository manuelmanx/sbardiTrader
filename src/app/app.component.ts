import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './shared/services/api-service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sbardiTrader';
  constructor() {

  }

  ngOnInit(): void {
  }
}
