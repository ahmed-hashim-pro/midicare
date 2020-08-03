import { Component, OnInit } from '@angular/core';
import {LayoutService} from '@core/service/theme/layout.service';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {AuthService} from '@core/service/auth/auth.service';
import {Doctor} from '@core/model/doctor';

@Component({
  selector: 'app-create-work-slot',
  templateUrl: './create-work-slot.component.html',
  styleUrls: ['./create-work-slot.component.scss'],
})
export class CreateWorkSlotComponent implements OnInit {
  public start_time: string;
  public end_time: string;
  private workSlot : DoctorWorkslot;

  constructor(private layoutService: LayoutService, private doctorWorkslotService: DoctorWorkSlotService,
              private authService: AuthService) {
    this.workSlot = new DoctorWorkslot(null, null, null, null, null);
  }

  async ngOnInit() {
    this.layoutService.mainContentNoHeader();
    const user = await this.authService.getUser();
    // Only reference is required
    this.workSlot.doctor = new Doctor(user.username, null, null, null, null);
    this.workSlot.capacity = 1;
  }

  async createWorkSlot() : Promise<void> {
    this.workSlot.start_time = new Date(this.start_time).toISOString();
    this.workSlot.end_time = new Date(this.end_time).toISOString();
    await this.doctorWorkslotService.createDoctorWorkSlot(this.workSlot);
  }
}
