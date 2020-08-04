import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CognitoAmplify} from '@amazon/cognito-amplify';
import {GqlDoctorService} from '@amazon/gql-doctor.service';
import {GqlDoctorWorkslotService} from '@amazon/gql-doctor-workslot.service';
import {GqlPatientService} from '@amazon/gql-patient.service';
import {GqlSessionService} from '@amazon/gql-session.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {provide: 'AuthServiceProvider', useClass: CognitoAmplify},
    {provide: 'DoctorServiceProvider', useClass: GqlDoctorService},
    {provide: 'SessionServiceProvider', useClass: GqlSessionService},
    {provide: 'DoctorWorkSlotServiceProvider', useClass: GqlDoctorWorkslotService},
    {provide: 'PatientServiceProvider', useClass: GqlPatientService}
  ]
})
export class AmazonModule { }
