import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDoctorsComponent} from '@src/app/patient/list-doctors/list-doctors.component';
import {ListDoctorWorkSlotsComponent} from '@patient/list-doctor-work-slots/list-doctor-work-slots.component';

const routes: Routes = [
    {
        path: 'doctors',
        component: ListDoctorsComponent
    },
    {
        path: 'doctors/:doctorID',
        component: ListDoctorWorkSlotsComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(
        [
          {
            path: 'patient',
            children: routes
          }
        ]
    )
  ],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
