import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AuthService } from '@core/service/auth/auth.service';
import { Router, RouterEvent } from '@angular/router';
import { WorkSlotComponent } from '../doctor/work-slot/work-slot.component';
import { ClinicComponent } from '../doctor/clinic/clinic.component';
import { MainComponent } from './main/main.component';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { CompaniesComponent } from './companies/companies.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardPage implements OnInit {
  public dark: boolean;
  public loggedIn: boolean;

  doctorPage: any = MainComponent;
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
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
       case 'doctors':
         this.doctorPage = DoctorsComponent;
         break;
       case 'patients':
         this.doctorPage =PatientsComponent;
         break;
         case 'companies':
          this.doctorPage =CompaniesComponent;
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

  

  
}
