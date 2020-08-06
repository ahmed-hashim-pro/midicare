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
  public dark: boolean;
  public loggedIn: boolean;

  public appPages = [
    {
      title: 'Schedule',
      url: '/patient/doctors',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];

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
        this.loggedIn = val.username !== null ? true : false;
    });
  }

  private subscribeToLayoutService() {
    this.layoutService.header.subscribe(val => {
      setTimeout(
          () => {
            this.header = val;
          }
      );
    });
    this.layoutService.footer.subscribe(val => {
      setTimeout(
          () => {
            this.footer = val;
          }
      );
    });
    this.layoutService.sideBar.subscribe(val => {
      setTimeout(
          () => {
            this.sideBar = val;
          }
      );
    });
    this.layoutService.navigationBar.subscribe(val => {
      setTimeout(
          () => {
            this.navigationBar = val;
          }
      );
    });
  }
}
