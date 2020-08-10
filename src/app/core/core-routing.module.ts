import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "@core/login/login.component";
import {MainComponent} from '@core/main/main.component';
import {AccountComponent} from '@core/account/account.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuardService],
    data: {
      loggedIn: true
    }
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: routes
      }
    ])
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
