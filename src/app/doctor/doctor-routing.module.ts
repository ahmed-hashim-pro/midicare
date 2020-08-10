import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkSlotComponent} from '@doctor/work-slot/work-slot.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {MenuPageResolverService} from '@doctor/service/menu-page-resolver.service';

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
        path: 'doctor',
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        data: {
          loggedIn: true,
          roles: ['Doctors']
        },
        resolve: {
          menuPages: MenuPageResolverService
        },
        children: routes
      }
    ])
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
