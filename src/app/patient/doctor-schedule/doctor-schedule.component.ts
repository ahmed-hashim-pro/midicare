import { Component, OnInit } from '@angular/core';
import {Doctor} from '@core/model/doctor';
import {ActivatedRoute} from '@angular/router';
import {DoctorService} from '@core/service/data/doctor.service';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss'],
})
export class DoctorScheduleComponent implements OnInit {
  public doctor: Doctor;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }

  async ngOnInit() {
    this.doctor = <Doctor> history.state.doctor || null;
    if (!this.doctor) {
      this.route.params.subscribe(async params => {
        this.doctor = await this.doctorService.findDoctor(params['id'])
      });
    }
  }


}
