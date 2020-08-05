import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DoctorRoutingModule} from '@src/app/doctor/doctor-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
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
