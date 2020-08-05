import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@core/service/auth/auth.service";
import { CoreRoutingModule } from '@core/core-routing.module';
import {LoginComponent} from '@core/login/login.component';
import {IonicModule} from '@ionic/angular';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {FormsModule} from '@angular/forms';
import {LayoutService} from '@core/service/theme/layout.service';
import {DoctorService} from '@core/service/data/doctor.service';
import {SessionService} from '@core/service/data/session.service';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {MainComponent} from '@core/main/main.component';
import {SearchBarComponent} from '@core/components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    SearchBarComponent
  ],
  exports: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class CoreModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AuthGuardService,
        LayoutService,
        DoctorService,
        SessionService,
        DoctorWorkSlotService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
