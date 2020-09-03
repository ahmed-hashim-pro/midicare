import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "@core/login/login.component";
import {AccountComponent} from '@core/account/account.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import { PatientPage } from '../patient/patient.component';
import { DashboardPage } from '../dashboard/dashboard.component';
import { DoctorPage } from '../doctor/doctor.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'app',
  //   component: MainComponent
  // },
  {
    path: 'patient',
    component: PatientPage
  },
  {
    path: 'doctor',
    component: DoctorPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
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
