import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AUTHService} from "./auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthorizationModule {
  static forRoot () : ModuleWithProviders {
    return {
      ngModule: AuthorizationModule,
      providers: [
        AUTHService
      ]
    }
  }

  static forChild() : ModuleWithProviders {
    return {
      ngModule: AuthorizationModule
    }
  }
}
