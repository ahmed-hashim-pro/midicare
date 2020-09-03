import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DoctorRoutingModule} from '@src/app/doctor/doctor-routing.module';
import {FormsModule} from '@angular/forms';
import {WorkSlotComponent} from '@doctor/work-slot/work-slot.component';
import {MainComponent} from '@doctor/main/main.component';
import {CreateWorkslotComponent} from '@doctor/create-workslot/create-workslot.component';
import {CoreModule} from '@core/core.module';
import {ClinicComponent} from '@doctor/clinic/clinic.component';
import { DoctorPage } from './doctor.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add

const agoraConfig: AgoraConfig = { AppID: '692ec316096a4babb48a6f2b8fe8009b' };


@NgModule({
  declarations: [
    DoctorPage,
    MainComponent,
    WorkSlotComponent,
    CreateWorkslotComponent,
    ClinicComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DoctorRoutingModule,
    FormsModule,
    CoreModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)

  ]
})
export class DoctorModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: DoctorModule,
      providers: [
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: DoctorModule
    }
  }
}
