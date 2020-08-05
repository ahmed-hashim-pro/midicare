import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from '@patient/patient-routing.module';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [],
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
      providers: []
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: PatientModule
    }
  }
}
