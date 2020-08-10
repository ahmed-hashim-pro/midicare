import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DoctorRoutingModule} from '@src/app/doctor/doctor-routing.module';
import {FormsModule} from '@angular/forms';
import {WorkSlotComponent} from '@doctor/work-slot/work-slot.component';
import {MenuPageResolverService} from '@doctor/service/menu-page-resolver.service';



@NgModule({
  declarations: [
      WorkSlotComponent
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
          MenuPageResolverService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: DoctorModule
    }
  }
}
