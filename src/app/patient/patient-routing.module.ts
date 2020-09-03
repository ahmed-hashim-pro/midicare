import { NgModule } from '@angular/core';
import {DoctorsComponent} from '@patient/doctors/doctors.component';
import {DoctorScheduleComponent} from '@patient/doctor-schedule/doctor-schedule.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {ScheduleComponent} from '@patient/schedule/schedule.component';
import {CallDoctorComponent} from '@patient/call-doctor/call-doctor.component';
import { PatientPage } from './patient.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuPage } from '@core/service/menu-page.service';


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
     redirectTo: 'patient', pathMatch: 'full'
   },
   {
     path: '',
     component: PatientPage
   },
   {
     path: 'patient',
     component: PatientPage
   },
  
   {
     path: 'calldoctor/:id',
     component: CallDoctorComponent
   }

 ];




@NgModule({
 // imports: [RouterModule.forChild(routes)],
  
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
