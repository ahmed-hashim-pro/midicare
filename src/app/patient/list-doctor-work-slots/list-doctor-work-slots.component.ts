import {Component, OnInit} from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DoctorTextSessionService} from '@core/service/data/doctor-text-session.service';
import {DoctorAudioSessionService} from '@core/service/data/doctor-audio-session.service';
import {DoctorVideoSessionService} from '@core/service/data/doctor-video-session.service';
import {DoctorTextSession} from '@core/model/doctor-text-session';
import {AuthService} from '@core/service/auth/auth.service';
import {Patient} from '@core/model/patient';
import {SessionStatus} from '@core/model/session-status';
import {DoctorAudioSession} from '@core/model/doctor-audio-session';
import {DoctorVideoSession} from '@core/model/doctor-video-session';

@Component({
  selector: 'app-list-doctor-work-slots',
  templateUrl: './list-doctor-work-slots.component.html',
  styleUrls: ['./list-doctor-work-slots.component.scss'],
})
export class ListDoctorWorkSlotsComponent implements OnInit {
  private doctorID: string;
  workSlots: DoctorWorkslot[];

  constructor(private doctorWorkSlotService: DoctorWorkSlotService, private route: ActivatedRoute,
              private doctorTextSessionService: DoctorTextSessionService,
              private doctorAudioSessionService: DoctorAudioSessionService,
              private doctorVideoSessionService: DoctorVideoSessionService,
              private authService: AuthService
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(
        async (params: ParamMap) => {
          this.doctorID = params.get('doctorID');
          this.workSlots = await this.doctorWorkSlotService.findDoctorWorkSlotsByDoctor(this.doctorID);
        }
    )
  }

  async bookText(workSlot: DoctorWorkslot) {
    const user = await this.authService.getUser();
    const doctorTextSession = new DoctorTextSession(
        workSlot.id,
        workSlot.doctor,
        new Patient(user.username, null),
        workSlot.start_time,
        workSlot.end_time,
        SessionStatus.REQUESTED
    );
    await this.doctorTextSessionService.createDoctorTextSession(doctorTextSession);
  }

  async bookAudio(workSlot: DoctorWorkslot) {
    const user = await this.authService.getUser();
    const doctorAudioSession = new DoctorAudioSession(
        workSlot.id,
        workSlot.doctor,
        new Patient(user.username, null),
        workSlot.start_time,
        workSlot.end_time,
        SessionStatus.REQUESTED
    );
    await this.doctorAudioSessionService.createDoctorAudioSession(doctorAudioSession);
  }

  async bookVideo(workSlot: DoctorWorkslot) {
    const user = await this.authService.getUser();
    const doctorVideoSession = new DoctorVideoSession(
        workSlot.id,
        workSlot.doctor,
        new Patient(user.username, null),
        workSlot.start_time,
        workSlot.end_time,
        SessionStatus.REQUESTED
    );
    await this.doctorVideoSessionService.createDoctorVideoSession(doctorVideoSession);
  }

}
