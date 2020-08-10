import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkSlotComponent} from '@doctor/work-slot/work-slot.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'workslot',
    component: WorkSlotComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'doctors',
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
