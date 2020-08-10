import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from '@core/service/auth/auth.service';
import {Router} from '@angular/router';
import {MenuPage, MenuPageService} from '@core/service/menu-page.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public dark: boolean;
  public loggedIn: boolean;

  public menuPages: MenuPage[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private menuPageService: MenuPageService,
    private router: Router
  ) {
  }


   async ngOnInit() {
     this.initializeApp();
     this.subscribeToAuthService();
     this.subscribeToMenuPageService();
     this.dark = false;
     this.loggedIn = await this.authService.isSingedIn();
     const user = await this.authService.getUser();
     if (this.loggedIn) {
         if (user.groups.includes('Patients')) {
             await this.router.navigate(['patient','app']);
         } else if (user.groups.includes('Doctors')) {
             await this.router.navigate(['doctors', 'app']);
         }
     }
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

  private subscribeToMenuPageService() {
    this.menuPageService.MenuPages.subscribe(
        pages => {
          this.menuPages = pages;
        }
    );
  }
}
