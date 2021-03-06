import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { AngularFireModule } from '@angular/fire';
import { ConfigService } from './shared/services/config/config.service';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { DatabaseService } from './shared/services/database/database.service';
import { TradePreviewComponent } from './components/trade-preview/trade-preview.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TradingplanEditorComponent } from './components/tradingplan-editor/tradingplan-editor.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { NewTradeModalFormComponent } from './components/new-trade-modal-form/new-trade-modal-form.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { DraggableModalComponent } from './components/draggable-modal/draggable-modal.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PartializeTradeModalComponent } from './components/partialize-trade-modal/partialize-trade-modal.component';
import { CloseTradeModalComponent } from './components/close-trade-modal/close-trade-modal.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ProgressbarComponent,
    TradePreviewComponent,
    LoadingSpinnerComponent,
    TradingplanEditorComponent,
    InputboxComponent,
    ComboboxComponent,
    DatepickerComponent,
    ButtonComponent,
    CheckboxComponent,
    NewTradeModalFormComponent,
    MultiselectComponent,
    PopupModalComponent,
    ProgressCircleComponent,
    DraggableModalComponent,
    CalculatorComponent,
    PartializeTradeModalComponent,
    CloseTradeModalComponent,
    TextAreaComponent,
    TabsComponent,
    SnackbarComponent,
    DashboardComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [
    AuthGuardService,
    ConfigService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
