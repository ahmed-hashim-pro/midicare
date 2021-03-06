import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'patient',
        loadChildren: () => import('@patient/patient.module').then(m => m.PatientModule)
    },
    {
        path: 'doctor',
        loadChildren: () => import('@doctor/doctor.module').then(m => m.DoctorModule),
    },
     {
         path: '',

         loadChildren: () => import('@core/core.module').then(m => m.CoreModule)
     },
    
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
