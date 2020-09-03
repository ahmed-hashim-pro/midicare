import { Component, OnInit } from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {SessionType} from '@core/model/session';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {AuthService} from '@core/service/auth/auth.service';
import {ModalController} from '@ionic/angular';
import {CreateWorkslotComponent} from '@doctor/create-workslot/create-workslot.component';

@Component({
  selector: 'app-work-slot',
  templateUrl: './work-slot.component.html',
  styleUrls: ['./work-slot.component.scss'],
})
export class WorkSlotComponent implements OnInit {
  public workSlots : DoctorWorkslot[];
  public SessionType = SessionType;

  constructor(private doctorWorkslotService: DoctorWorkSlotService, private authService: AuthService,
              private modalController: ModalController) { }

  async ngOnInit() {
    try {
      const user = await this.authService.getUser();
      this.workSlots = await this.doctorWorkslotService.findDoctorWorkSlotsByDoctor(user.username);
    }catch (err) {
    }
  }

  async create() {
    try {
      const modal = await this.modalController.create({
        component: CreateWorkslotComponent
      });
      await modal.present();
    } catch (err) {

    }
  }

}
