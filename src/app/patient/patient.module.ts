import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from '@patient/patient-routing.module';
import {IonicModule} from '@ionic/angular';
import {DoctorsComponent} from '@patient/doctors/doctors.component';
import {CoreModule} from '@core/core.module';
import {FormsModule} from '@angular/forms';
import {DoctorScheduleComponent} from '@patient/doctor-schedule/doctor-schedule.component';
import {RegisterSessionComponent} from '@patient/register-session/register-session.component';
import {ScheduleComponent} from '@patient/schedule/schedule.component';
import {MenuPageResolverService} from '@patient/service/menu-page-resolver.service';

@NgModule({
  declarations: [
      DoctorsComponent,
      DoctorScheduleComponent,
      RegisterSessionComponent,
      ScheduleComponent
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
      providers: [
        MenuPageResolverService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: PatientModule
    }
  }
}
