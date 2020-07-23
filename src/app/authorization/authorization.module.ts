import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AUTHService} from "./auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      AUTHService
  ]
})
export class AuthorizationModule { }
