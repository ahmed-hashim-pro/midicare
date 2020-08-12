import {Component, OnInit} from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {AuthService} from '@core/service/auth/auth.service';
import {Doctor} from '@core/model/doctor';
import {NgForm} from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import {SessionType} from '@core/model/session';

@Component({
  selector: 'app-create-workslot',
  templateUrl: './create-workslot.component.html',
  styleUrls: ['./create-workslot.component.scss'],
})
export class CreateWorkslotComponent implements OnInit {
  public workSlot : DoctorWorkslot;
  public isAudio : boolean;
  public isText : boolean;
  public isVideo : boolean;
  public submitted : boolean;

  constructor(private doctorWorkslotService: DoctorWorkSlotService, private authService: AuthService,
              private modalController: ModalController, private alertController: AlertController) { }

  async ngOnInit() {
    this.submitted = false;
    this.workSlot = new DoctorWorkslot(null ,null, null, null, null,[]);
    try {
      const user = await this.authService.getUser();
      this.workSlot.doctor = new Doctor(user.username, null, null, null, []);
    } catch (err) {

    }
  }

  async create (form: NgForm) {
    this.isAudio ? this.workSlot.allowedSessions.push(SessionType.AUDIO) : null;
    this.isVideo ? this.workSlot.allowedSessions.push(SessionType.VIDEO) : null;
    this.isText ? this.workSlot.allowedSessions.push(SessionType.TEXT) : null;
    try {
      await this.doctorWorkslotService.createDoctorWorkSlot(this.workSlot);
      const alert = await this.alertController.create({
        header: 'Session Created',
        message: 'Patients now can reach you on the specified time',
        buttons: ['OK']
      });
      await alert.present();

    } catch (err) {
      const alert = await this.alertController.create({
        header: 'Session Creation failed',
        message: 'Please try again',
        buttons: ['OK']
      });
      await alert.present();

    }
    await this.modalController.dismiss();
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  validateCheckBoxes() : boolean {
    return this.isAudio || this.isText || this.isVideo;
  }
}
