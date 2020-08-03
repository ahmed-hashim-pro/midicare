import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@doctor/dashboard/dashboard.component';
import {CreateWorkSlotComponent} from '@doctor/create-work-slot/create-work-slot.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create-workslot',
    component: CreateWorkSlotComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
