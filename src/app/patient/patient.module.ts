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
import {CallDoctorComponent} from '@patient/call-doctor/call-doctor.component';
import { PatientPage } from './patient.component';
import { MainComponent } from './main/main.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add

const agoraConfig: AgoraConfig = { AppID: '692ec316096a4babb48a6f2b8fe8009b' };
@NgModule({
  declarations: [
      PatientPage,
      MainComponent,
      DoctorsComponent,
      DoctorScheduleComponent,
      RegisterSessionComponent,
      ScheduleComponent,
      CallDoctorComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    IonicModule,
    CoreModule,
    FormsModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)

  ]
})
export class PatientModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: PatientModule,
      providers: [
       ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: PatientModule
    }
  }
}
