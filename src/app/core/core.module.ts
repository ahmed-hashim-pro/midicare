import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "@core/service/auth/auth.service";
import { CoreRoutingModule } from '@core/core-routing.module';
import {LoginComponent} from '@core/login/login.component';
import {IonicModule} from '@ionic/angular';
import {AuthGuardService} from '@core/service/auth/auth-guard.service';
import {FormsModule} from '@angular/forms';
import {DoctorService} from '@core/service/data/doctor.service';
import {SessionService} from '@core/service/data/session.service';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {MainComponent} from '@core/main/main.component';
import {SearchBarComponent} from '@core/components/search-bar/search-bar.component';
import {AccountComponent} from '@core/account/account.component';
import {DoctorCardComponent} from '@core/components/doctor-card/doctor-card.component';
import {MenuPageService} from '@core/service/menu-page.service';
import {MenuPageResolverService} from '@core/service/menu-page-resolver.service';



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    MainComponent,
    SearchBarComponent,
    DoctorCardComponent,
  ],
  exports: [
    SearchBarComponent,
    DoctorCardComponent
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
        DoctorService,
        SessionService,
        DoctorWorkSlotService,
        MenuPageService,
        MenuPageResolverService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
