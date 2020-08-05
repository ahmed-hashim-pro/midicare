import {Component, OnInit} from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {DoctorWorkSlotService} from '@core/service/data/doctor-work-slot.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuthService} from '@core/service/auth/auth.service';
import {Patient} from '@core/model/patient';
import {User} from '@core/model/user';
import {Session, SessionStatus, SessionType} from '@core/model/session';
import {SessionService} from '@core/service/data/session.service';

@Component({
  selector: 'app-list-doctor-work-slots',
  templateUrl: './list-doctor-work-slots.component.html',
  styleUrls: ['./list-doctor-work-slots.component.scss'],
})
export class ListDoctorWorkSlotsComponent implements OnInit {
  private doctorID: string;
  private user: User;
  workSlots: DoctorWorkslot[];

  constructor(private doctorWorkSlotService: DoctorWorkSlotService, private route: ActivatedRoute,
              private sessionService: SessionService,
              private authService: AuthService
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(
        async (params: ParamMap) => {
          this.doctorID = params.get('doctorID');
          this.workSlots = await this.doctorWorkSlotService.findDoctorWorkSlotsByDoctor(this.doctorID);
        }
    );
    this.user = await this.authService.getUser();
  }

  async bookText(workSlot: DoctorWorkslot) {
    const doctorTextSession = new Session(
        workSlot.id,
        workSlot.doctor,
        new Patient(this.user.username, null),
        workSlot.startTime,
        workSlot.endTime,
        SessionStatus.REQUESTED,
        SessionType.TEXT
    );
    await this.sessionService.createSession(doctorTextSession);
  }

  async bookAudio(workSlot: DoctorWorkslot) {
    const doctorAudioSession = new Session(
        workSlot.id,
        workSlot.doctor,
        new Patient(this.user.username, null),
        workSlot.startTime,
        workSlot.endTime,
        SessionStatus.REQUESTED,
        SessionType.AUDIO
    );
    await this.sessionService.createSession(doctorAudioSession);
  }

  async bookVideo(workSlot: DoctorWorkslot) {
    const doctorVideoSession = new Session(
        workSlot.id,
        workSlot.doctor,
        new Patient(this.user.username, null),
        workSlot.startTime,
        workSlot.endTime,
        SessionStatus.REQUESTED,
        SessionType.VIDEO
    );
    await this.sessionService.createSession(doctorVideoSession);
  }

}
