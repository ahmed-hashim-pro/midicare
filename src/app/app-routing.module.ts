import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {AppComponent} from '@src/app/app.component';
import {MainComponent} from '@core/main/main.component';

const routes: Routes = [
    {
        path: 'patient',
        loadChildren: () => import('@patient/patient.module').then(m => m.PatientModule),
        canActivate: [AuthGuardService],
        data: {
            loggedIn: true,
            roles: ['Patients']
        }
    },
    {
        path: 'doctor',
        loadChildren: () => import('@doctor/doctor.module').then(m => m.DoctorModule),
        canActivate: [AuthGuardService],
        data: {
            loggedIn: true,
            roles: ['Doctors']
        }
    },
    // Temporary route rule
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
