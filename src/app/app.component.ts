import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LayoutService} from '@core/service/theme/layout.service';
import {AuthService} from '@core/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public header: boolean;
  public footer: boolean;
  public sideBar: boolean;
  public navigationBar: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private layoutService: LayoutService,
    private authService: AuthService,
    private router: Router
  ) {
  }


   async ngOnInit() {
     this.initializeApp();
     this.subscribeToLayoutService();
     // Redirect user to the module or to login
     try {
       const user = await this.authService.getUser();
       const role = user.groups[0];
       switch (role) {
         case 'Patients':
           await this.router.navigateByUrl('patient/dashboard');
           break;
         case 'Doctors':
           await this.router.navigateByUrl('doctor/dashboard');
           break;
         default:
           await this.router.navigateByUrl('login');
       }
     } catch (err) {
       await this.router.navigateByUrl('login');
     }
   }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private subscribeToLayoutService() {
    this.layoutService.header.subscribe(val => {
      this.header = val;
    });
    this.layoutService.footer.subscribe(val => {
      this.footer = val;
    });
    this.layoutService.sideBar.subscribe(val => {
      this.sideBar = val;
    });
    this.layoutService.navigationBar.subscribe(val => {
      this.navigationBar = val;
    });
  }
}
