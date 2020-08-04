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
import {SessionService} from '@core/service/data/session.service';



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
        SessionService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
