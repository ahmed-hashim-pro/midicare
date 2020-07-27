import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AUTHService} from "./service/auth/auth.service";
import { CoreRoutingModule } from './core-routing.module';
import {LoginComponent} from "@core/login/login.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
      LoginComponent
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
        AUTHService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
