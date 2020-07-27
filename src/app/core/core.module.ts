import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./service/auth/auth.service";
import { CoreRoutingModule } from './core-routing.module';
import {LoginComponent} from "@core/login/login.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from '@angular/forms';
import {LogoutButtonComponent} from '@core/logout-button/logout-button.component';



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
        AuthService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
