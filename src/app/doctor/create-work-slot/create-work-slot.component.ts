import {Component, OnInit} from '@angular/core';
import {LayoutService} from '@core/service/theme/layout.service';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {AuthService} from '@core/service/auth/auth.service';
import {Doctor} from '@core/model/doctor';
import {SessionType} from '@core/model/session';

@Component({
  selector: 'app-create-work-slot',
  templateUrl: './create-work-slot.component.html',
  styleUrls: ['./create-work-slot.component.scss'],
})
export class CreateWorkSlotComponent implements OnInit {
  public start_time: string;
  public end_time: string;
  private workSlot : DoctorWorkslot;

  constructor(private layoutService: LayoutService, private doctorWorkSlotService: DoctorWorkSlotService,
              private authService: AuthService) {
    this.workSlot =
        new DoctorWorkslot(null, null, null, null, null, null);
  }

  async ngOnInit() {
    this.layoutService.mainContentNoHeader();
    const user = await this.authService.getUser();
    // Only reference is required
    this.workSlot.doctor = new Doctor(user.username, null, null, null, null);
    this.workSlot.capacity = 1;
    this.workSlot.allowedSessions = [SessionType.AUDIO, SessionType.TEXT, SessionType.VIDEO];
  }

  async createWorkSlot() : Promise<void> {
    this.workSlot.startTime = new Date(this.start_time).toISOString();
    this.workSlot.endTime = new Date(this.end_time).toISOString();
    await this.doctorWorkSlotService.createDoctorWorkSlot(this.workSlot);
  }
}
