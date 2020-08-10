import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from '@core/model/doctor';
import {SessionType} from '@core/model/session';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-register-session',
  templateUrl: './register-session.component.html',
  styleUrls: ['./register-session.component.scss'],
})
export class RegisterSessionComponent implements OnInit {
  @Input() public doctor: Doctor;
  @Input() public sessionType: SessionType;

  public workSlots : DoctorWorkslot[];

  constructor(private workSlotService: DoctorWorkSlotService, private modalController: ModalController,
              private alertController: AlertController) { }

  async ngOnInit() {
    try {
      this.workSlots = await this.workSlotService.findDoctorWorkSlotsByDoctor(this.doctor.id);
    } catch (err) {
      console.log(err);
    }
  }

  async register(slot: DoctorWorkslot) {
    console.log('registering this slot', slot);
    const alert = await this.alertController.create({
      header: 'Session Created',
      subHeader: this.doctor.name,
      message: 'The doctor will contact you on the session time',
      buttons: ['OK']
    });
    await alert.present();
    await this.modalController.dismiss();
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

}
