import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _dictionary: any;
  constructor(private _http: HttpClient, private _configService: ConfigService) { }


}
