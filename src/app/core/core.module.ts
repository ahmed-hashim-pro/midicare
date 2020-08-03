import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@core/service/auth/auth.service";
import { CoreRoutingModule } from '@core/core-routing.module';
import {LoginComponent} from '@core/login/login.component';
import {IonicModule} from '@ionic/angular';
import {LogoutButtonComponent} from '@core/logout-button/logout-button.component';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {FormsModule} from '@angular/forms';
import {LayoutService} from '@core/service/theme/layout.service';
import {DoctorService} from '@core/service/data/doctor.service';
import {DoctorTextSessionService} from '@core/service/data/doctor-text-session.service';
import {DoctorVideoSessionService} from '@core/service/data/doctor-video-session.service';
import {DoctorAudioSessionService} from '@core/service/data/doctor-audio-session.service';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';



@NgModule({
  declarations: [
      LoginComponent,
      LogoutButtonComponent
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
        DoctorTextSessionService,
        DoctorVideoSessionService,
        DoctorAudioSessionService,
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
