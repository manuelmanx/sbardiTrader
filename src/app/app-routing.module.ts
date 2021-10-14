import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent, canActivate: [AuthGuardService] },
  { path: 'loginpage', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/loginpage', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
