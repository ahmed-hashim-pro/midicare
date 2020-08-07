import { Component, OnInit } from '@angular/core';
import {DoctorService} from '@core/service/data/doctor.service';
import {Doctor} from '@core/model/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  public filter: string;
  public tabs: {
    name: string,
    icon: string,
    path: string
  }[];

  public doctors: Doctor[];

  constructor(private doctorService: DoctorService) { }

  async ngOnInit() {
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
    try {
      this.doctors = await this.doctorService.findDoctors();
    } catch (e) {
    //  handle on not being able to connect to backend
    }

  }

}
