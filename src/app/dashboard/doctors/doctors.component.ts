import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';
import { AlertController,ModalController, Platform } from '@ionic/angular';
import { ViewPlayerPage } from './view-player/view-player.page';
import { EditPlayerPage } from './edit-player/edit-player.page';
import { Doctor } from '@core/model/doctor';
import { DoctorService } from '@core/service/data/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  public doctors: Doctor[];
  public isPhone: boolean =false;
  public filter: string;
  public tabs: {
    name: string,
    icon: string,
    path: string
  }[];

  constructor(private alertCtrl: AlertController,private modalController: ModalController,private platform: Platform,private doctorService: DoctorService) { }

  search(query) {
    console.log('I search for: ', query);
  }

  async ngOnInit() {
    try {
      this.doctors = await this.doctorService.findDoctors();
    } catch (e) {
    //  handle on not being able to connect to backend
    }
    this.platform.ready().then(() => {
      // 'hybrid' detects both Cordova and Capacitor
      if (this.platform.is('hybrid')) {
        // make your native API calls
        console.log('hybrid');
        this.isPhone==true;
      } else {
        // fallback to browser APIs
                console.log('web');
                this.isPhone==false;

      }
    });
    this.tabs = [
      {
        name: 'Schedule',
        icon: 'calendar',
        path: 'app'
      },
      {
        name: 'Help',
        icon: 'information',
        path: 'login'
      }
    ];
    
  }

  visit(path: string) {
    console.log('I have been visited', path);
  }
  playersList:any[]=[
 
{
  name:'Dwayne Bravo',image:'https://iplstatic.s3.amazonaws.com/players/284/25.png',role:"All-rounder",
batting_style:"Right-handed",
bowling_style:"Right-arm medium fast",
nationality:"West Indian",
matches:126,
runs:1442,
fifties:5,
fours:114,
sixes:60
}]

async openModal(player) {
  const modal = await this.modalController.create({
    component: ViewPlayerPage,
    componentProps: { player: player }
  });
  return await modal.present();
}

async editModal(player,index) {
  const modal = await this.modalController.create({
    component: EditPlayerPage,
    componentProps: { player: player },
    cssClass: !this.isPhone?'modal-fullscreen':'null'
  });
  modal.onDidDismiss().then(data=>{
    this.playersList[index]=data.data
  })
  return await modal.present();
}

async presentAlert() {
  let alert =await this.alertCtrl.create({
    header: 'Low battery',
    subHeader: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

async presentConfirm() {
  let alert = await this.alertCtrl.create({
    header: 'Confirm purchase',
    message: 'Do you want to buy this book?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buy',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}

async presentPrompt() {
  let alert = await this.alertCtrl.create({
    header: 'Login',
    inputs: [
      {
        name: 'username',
        placeholder: 'Username'
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          // if (User.isValid(data.username, data.password)) {
          //   // logged in!
          // } else {
          //   // invalid login
          //   return false;
          // }
        }
      }
    ]
  });
  alert.present();
}
}