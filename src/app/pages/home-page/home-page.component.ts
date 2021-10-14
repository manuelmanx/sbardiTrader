import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { $DataCandleInterface, $ForexDataRetrivingParamsInterface, $ForexTimeframeEnum } from 'src/app/shared/interfaces/api-data.dto';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'Sbardi View';
  constructor() { }
  ngOnInit(): void {

  }
}
