import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from '@patient/patient-routing.module';
import {DoctorService} from '@patient/service/doctor.service';
import {ListDoctorsComponent} from '@patient/list-doctors/list-doctors.component';
import {IonicModule} from '@ionic/angular';
import {ListDoctorWorkSlotsComponent} from '@patient/list-doctor-work-slots/list-doctor-work-slots.component';
import {DoctorWorkSlotService} from '@patient/service/doctor-work-slot.service';



@NgModule({
  declarations: [
      ListDoctorsComponent,
      ListDoctorWorkSlotsComponent
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
        DoctorService,
        DoctorWorkSlotService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: PatientModule
    }
  }
}
