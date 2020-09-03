import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { CompaniesComponent } from './companies/companies.component';
import { AdminDoctorCardComponent } from '@core/components/admin-doctor-card/admin-doctor-card.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    FormsModule,
   
    
  ],
  declarations: [
    DashboardPage,
    MainComponent,
    DoctorsComponent,
    PatientsComponent,
    CompaniesComponent,
    AdminDoctorCardComponent,
   

  ],providers:[ImagePicker]
})
export class DashboardPageModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: DashboardPageModule,
      providers: [ImagePicker
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: DashboardPageModule
    }
  }
}
