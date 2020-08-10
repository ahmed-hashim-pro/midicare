import {Component, OnInit} from '@angular/core';
import {Doctor} from '@core/model/doctor';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '@core/service/data/doctor.service';
import {SessionType} from '@core/model/session';
import {ModalController} from '@ionic/angular';
import {RegisterSessionComponent} from '@patient/register-session/register-session.component';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss'],
})
export class DoctorScheduleComponent implements OnInit {
  public doctor: Doctor;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService,
              private modalController: ModalController) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.doctor = await this.doctorService.findDoctor(params['id'])
    });
  }

  async schedule (input: string) {
    const sessionType : SessionType = {
      TEXT: SessionType.TEXT,
      AUDIO: SessionType.AUDIO,
      VIDEO: SessionType.VIDEO
    }[input];
    const modal = await this.modalController.create({
      component: RegisterSessionComponent,
      componentProps: {
        doctor: this.doctor,
        sessionType: sessionType
      }
    });
    await modal.present();
  }
}
