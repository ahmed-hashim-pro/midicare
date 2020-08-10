import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from '@core/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public dark: boolean;
  public loggedIn: boolean;

  public appPages = [
    {
      title: 'Home',
      url: '/app',
      icon: 'home'
    },
    {
      title: 'Schedule',
      url: '/patient/schedule',
      icon: 'calendar'
    },
    {
      title: 'Doctors',
      url: '/patient/doctors',
      icon: 'people'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
  }


   async ngOnInit() {
     this.initializeApp();
     this.subscribeToAuthService();
     // Redirect user to the module or to login
     this.dark = false;
     this.loggedIn = await this.authService.isSingedIn();
   }

   async logout() {
    await this.authService.signOut();
    return this.router.navigateByUrl('login');
   }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private subscribeToAuthService() {
    this.authService.user.subscribe(val => {
        this.loggedIn = val.username !== null;
    });
  }
}
