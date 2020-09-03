import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'app',
    redirectTo: 'dashboard', pathMatch: 'full'
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
