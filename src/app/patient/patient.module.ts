import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from '@src/app/patient/patient-routing.module';
import {DoctorService} from '@src/app/patient/service/doctor.service';
import {ListDoctorsComponent} from '@src/app/patient/list-doctors/list-doctors.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [
      ListDoctorsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    IonicModule
  ]
})
export class PatientModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: PatientModule,
      providers: [
        DoctorService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: PatientModule
    }
  }
}
