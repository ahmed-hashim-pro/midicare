import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from '@core/model/doctor';
import {SessionType} from '@core/model/session';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-register-session',
  templateUrl: './register-session.component.html',
  styleUrls: ['./register-session.component.scss'],
})
export class RegisterSessionComponent implements OnInit {
  @Input() public doctor: Doctor;
  @Input() public sessionType: SessionType;

  public workSlots : DoctorWorkslot[];

  constructor(private workSlotService: DoctorWorkSlotService, private modalController: ModalController) { }

  async ngOnInit() {
    try {
      this.workSlots = await this.workSlotService.findDoctorWorkSlotsByDoctor(this.doctor.id);
    } catch (err) {
      console.log(err);
    }
  }

  async register(slot: DoctorWorkslot) {
    console.log('registering this slot', slot);
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

}
