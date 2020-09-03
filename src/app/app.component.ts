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
    // this.subscribeToMenuPageService();
     this.dark = false;
     this.loggedIn = await this.authService.isSingedIn();
     const user = await this.authService.getUser();
     if (this.loggedIn) {
         if (user.groups.includes('Patients')) {
             await this.router.navigate(['patient']);
         } else if (user.groups.includes('Doctors')) {
            await this.router.navigate(['doctor']);

         }else if(user.groups.includes('Admins')){
          await this.router.navigate(['dashboard']);

         }
     }else{
      return this.router.navigateByUrl('login');
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
    this.authService.user.subscribe(user => {
        this.loggedIn = user.username !== null;
        // TODO: Better mechanism to manage the menu pages in their respective modules
        if (user.groups.includes('Patients')) {
        //return  this.router.navigate(['patient']);
            //  this.menuPageService.MenuPages.next(
            //      [
            //          new MenuPage('Home', '/patient/app','home'),
            //          new MenuPage('Schedule', '/patient/schedule', 'calendar'),
            //          new MenuPage('Doctors', '/patient/doctors', 'people'),
            //          new MenuPage('About','/about', 'information-circle')
            //      ]
            //  );
        }
        if(user.groups.includes('Doctors')) {
          //return this.router.navigate(['doctor', 'app']);

            // this.menuPageService.MenuPages.next(
            //     [
            //         new MenuPage('Home', '/doctor/app','home'),
            //         new MenuPage('Work Schedule', '/doctor/workslot', 'calendar'),
            //         new MenuPage('Clinic', '/doctor/clinic', 'medical'),
            //         new MenuPage('About','/about', 'information-circle')
            //     ]
            // );
        }
        if(user.groups.includes('Admins')) {
          //return this.router.navigate(['dashboard', 'app']);

            // this.menuPageService.MenuPages.next(
            //     [
            //         new MenuPage('Home', '/doctor/app','home'),
            //         new MenuPage('Work Schedule', '/doctor/workslot', 'calendar'),
            //         new MenuPage('Clinic', '/doctor/clinic', 'medical'),
            //         new MenuPage('About','/about', 'information-circle')
            //     ]
            // );
        }


        if (!this.loggedIn) {
          return this.router.navigateByUrl('login');

            this.menuPageService.MenuPages.next(
                [
                  
                    new MenuPage('Home', '/app','home'),
                    new MenuPage('About','/about', 'information-circle')
                ]
            );
        }
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
