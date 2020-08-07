import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from '@patient/patient-routing.module';
import {IonicModule} from '@ionic/angular';
import {DoctorsComponent} from '@patient/doctors/doctors.component';
import {CoreModule} from '@core/core.module';
import {FormsModule} from '@angular/forms';
import {DoctorScheduleComponent} from '@patient/doctor-schedule/doctor-schedule.component';



@NgModule({
  declarations: [
      DoctorsComponent,
      DoctorScheduleComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    IonicModule,
    CoreModule,
    FormsModule
  ]
})
export class PatientModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: PatientModule,
      providers: []
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: PatientModule
    }
  }
}
