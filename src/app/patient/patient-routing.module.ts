import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from '@patient/doctors/doctors.component';
import {DoctorScheduleComponent} from '@patient/doctor-schedule/doctor-schedule.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {ScheduleComponent} from '@patient/schedule/schedule.component';
import {MainComponent} from '@patient/main/main.component';

const routes: Routes = [
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'doctor/:id',
    component: DoctorScheduleComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'app',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'patient',
      canActivate: [AuthGuardService],
      canActivateChild: [AuthGuardService],
      data: {
        loggedIn: true,
        roles: ['Patients']
      },
      children: routes
    }])
  ],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
