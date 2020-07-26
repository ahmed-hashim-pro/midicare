import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AUTHService} from "./auth/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
