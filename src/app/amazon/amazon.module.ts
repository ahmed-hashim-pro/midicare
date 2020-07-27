import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CognitoAmplify} from '@src/app/amazon/cognito-amplify';
import {GqlDoctorService} from '@amazon/gql-doctor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
      CognitoAmplify,
      GqlDoctorService
  ]
})
export class AmazonModule { }
