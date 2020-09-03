import { Component, OnInit, HostListener } from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from '@core/service/auth/auth.service';
import {Router, RouterEvent} from '@angular/router';
import {MenuPage, MenuPageService} from '@core/service/menu-page.service';
import { AccountComponent } from '@core/account/account.component';
import { WorkSlotComponent } from './work-slot/work-slot.component';
import { ClinicComponent } from './clinic/clinic.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
}) 
export class DoctorPage implements OnInit {
  public dark: boolean;
  public loggedIn: boolean;

  public menuPages: MenuPage[];
  doctorPage: any = MainComponent;
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private menuPageService: MenuPageService,
    private router: Router
  ) {
  }

  

  selectedPath = '';
   async ngOnInit() {
     this.initializeApp();
     this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath = event.url;
    });

     this.dark = false;
     this.loggedIn = await this.authService.isSingedIn();
     const user = await this.authService.getUser();
    //  if (this.loggedIn) {
    //      if (user.groups.includes('Patients')) {
    //         // await this.router.navigate(['patient']);
    //      } else if (user.groups.includes('Doctors')) {
    //          await this.router.navigate(['doctor', 'app']);
    //      }
    //  }else{
    //   return this.router.navigateByUrl('login');
    // }
   }
   category: any;

   setCategory(category) {
     switch (category) {
       case 'home':
         this.doctorPage = MainComponent;
         break;
       case 'schedule':
         this.doctorPage = WorkSlotComponent;
         break;
       case 'clinic':
         this.doctorPage = ClinicComponent;
         break;
         case 'about':
          this.doctorPage = MainComponent;
          break;
        case 'acount':
          this.doctorPage = AccountComponent;
          break;
        case 'support':
          this.doctorPage = MainComponent;
          break;
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
         this.menuPageService.MenuPages.next(
           [
               new MenuPage('Home', 'app','home'),
               new MenuPage('Schedule', 'schedule', 'calendar'),
               new MenuPage('Doctors', 'doctors', 'people'),
               new MenuPage('About','/about', 'information-circle')
           ]
       );
       
       
       


       
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
