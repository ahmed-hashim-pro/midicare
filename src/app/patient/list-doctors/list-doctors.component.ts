import { Component, OnInit } from '@angular/core';
import {Doctor} from '@core/model/doctor';
import {DoctorService} from '@src/app/patient/service/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss'],
})
export class ListDoctorsComponent implements OnInit {

  doctors : Doctor[]

  constructor(private doctorService: DoctorService) { }

  async ngOnInit() {
    this.doctors = await this.listDoctors();
  }

  private async listDoctors () : Promise<Doctor[]> {
    return await this.doctorService.findDoctors();
  }

}
