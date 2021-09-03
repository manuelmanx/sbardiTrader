import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './shared/services/api-service/api-service.service';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfigService } from './shared/services/config/config.service';
import { SbardiChartComponent } from './components/sbardi-chart/sbardi-chart.component';
import { SbardiIconComponent } from './components/sbardi-icon/sbardi-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SbardiChartComponent,
    SbardiIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [
    ApiServiceService,
    AuthGuardService,
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
