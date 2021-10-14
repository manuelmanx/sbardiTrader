import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfigService } from './shared/services/config/config.service';
import { ChartplotComponent } from './components/chartplot/chartplot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChartplotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [
    AuthGuardService,
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
