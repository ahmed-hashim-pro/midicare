import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDoctorsComponent} from '@src/app/patient/list-doctors/list-doctors.component';

const routes: Routes = [
  {
    path: 'doctors',
    component: ListDoctorsComponent
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
