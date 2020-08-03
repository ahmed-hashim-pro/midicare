import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from '@core/core.module';
import {PatientModule} from '@src/app/patient/patient.module';
import {AmazonModule} from '@amazon/amazon.module';
import {DoctorModule} from '@src/app/doctor/doctor.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // Framework modules
    BrowserModule,
    IonicModule.forRoot(),
    AmplifyUIAngularModule,
    //  Project modules
    CoreModule.forRoot(),
    AppRoutingModule,
    PatientModule.forRoot(),
    DoctorModule.forRoot(),
    AmazonModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
