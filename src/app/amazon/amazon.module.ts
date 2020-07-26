import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CognitoAmplify from "@src/app/amazon/cognito-amplify";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      CognitoAmplify
  ]
})
export class AmazonModule { }
