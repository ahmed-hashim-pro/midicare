import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AUTHService } from '@core/auth/auth.service';
import { GqlDoctorService } from "@amazon/gql-doctor.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public Application: string = 'MediCare';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AUTHService,
    private doctorService: GqlDoctorService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    const user = await this.authService.signIn('firsttestuser@email.com','passpass');
    console.log(user);
    const doctors = await this.doctorService.list();
    console.log(doctors);
    console.log(await this.doctorService.get(doctors[0]));
  }
}
