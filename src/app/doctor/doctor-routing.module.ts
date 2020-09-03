import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkSlotComponent} from '@doctor/work-slot/work-slot.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {MainComponent} from '@doctor/main/main.component';
import {ClinicComponent} from '@doctor/clinic/clinic.component';
import { DoctorPage } from './doctor.component';

const routes: Routes = [
  {
    path: 'app',
    redirectTo: 'doctor', pathMatch: 'full'
  },
  {
    path: '',
    component: DoctorPage
  },
  {
    path: 'doctor',
    component: DoctorPage
  },
 
  {
    path: 'workslot',
    component: WorkSlotComponent,
  },
  {
    path: 'clinic',
    component: ClinicComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'doctor',
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        data: {
          loggedIn: true,
          roles: ['Doctors']
        },
        children: routes
      }
    ])
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
