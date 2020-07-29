import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDoctorsComponent} from '@src/app/patient/list-doctors/list-doctors.component';
import {ListDoctorWorkSlotsComponent} from '@patient/list-doctor-work-slots/list-doctor-work-slots.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';

const routes: Routes = [
    {
        path: 'doctors',
        component: ListDoctorsComponent,
        canActivate: [AuthGuardService],
        data: {
            loggedIn: true,
            roles: ['Patients']
        }
    },
    {
        path: 'doctors/:doctorID',
        component: ListDoctorWorkSlotsComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
