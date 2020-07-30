import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CognitoAmplify} from '@amazon/cognito-amplify';
import {GqlDoctorService} from '@amazon/gql-doctor.service';
import {GqlDoctorAudioSessionService} from '@amazon/gql-doctor-audio-session.service';
import {GqlDoctorTextSessionService} from '@amazon/gql-doctor-text-session.service';
import {GqlDoctorVideoSessionService} from '@amazon/gql-doctor-video-session.service';
import {GqlDoctorWorkslotService} from '@amazon/gql-doctor-workslot.service';
import {GqlPatientService} from '@amazon/gql-patient.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {provide: 'AuthServiceProvider', useClass: CognitoAmplify},
    {provide: 'DoctorServiceProvider', useClass: GqlDoctorService},
    {provide: 'DoctorAudioSessionServiceProvider', useClass: GqlDoctorAudioSessionService},
    {provide: 'DoctorTextSessionServiceProvider', useClass: GqlDoctorTextSessionService},
    {provide: 'DoctorVideoSessionServiceProvider', useClass: GqlDoctorVideoSessionService},
    {provide: 'DoctorAudioSessionServiceProvider', useClass: GqlDoctorAudioSessionService},
    {provide: 'DoctorWorkSlotServiceProvider', useClass: GqlDoctorWorkslotService},
    {provide: 'PatientServiceProvider', useClass: GqlPatientService}
  ]
})
export class AmazonModule { }
