import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DoctorRoutingModule} from '@src/app/doctor/doctor-routing.module';
import {DashboardComponent} from '@doctor/dashboard/dashboard.component';
import {CreateWorkSlotComponent} from '@doctor/create-work-slot/create-work-slot.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
      DashboardComponent,
      CreateWorkSlotComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DoctorRoutingModule,
    FormsModule
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
