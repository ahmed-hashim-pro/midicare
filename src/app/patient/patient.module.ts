import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from '@patient/patient-routing.module';
import {DoctorService} from '@core/service/data/doctor.service';
import {ListDoctorsComponent} from '@patient/list-doctors/list-doctors.component';
import {IonicModule} from '@ionic/angular';
import {ListDoctorWorkSlotsComponent} from '@patient/list-doctor-work-slots/list-doctor-work-slots.component';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {DashboardComponent} from '@patient/dashboard/dashboard.component';



@NgModule({
  declarations: [
      ListDoctorsComponent,
      ListDoctorWorkSlotsComponent,
      DashboardComponent
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
