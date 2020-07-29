import { Component, OnInit } from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {DoctorWorkSlotService} from '@patient/service/doctor-work-slot.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DoctorTextSessionService} from '@patient/service/doctor-text-session.service';
import {DoctorAudioSessionService} from '@patient/service/doctor-audio-session.service';
import {DoctorVideoSession} from '@core/model/doctor-video-session';
import {DoctorVideoSessionService} from '@patient/service/doctor-video-session.service';
import {DoctorTextSession} from '@core/model/doctor-text-session';

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
              private doctorVideoSessionService: DoctorVideoSessionService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(
        async (params: ParamMap) => {
          this.doctorID = params.get('doctorID');
          this.workSlots = await this.doctorWorkSlotService.findDoctorWorkSlotsByDoctor(this.doctorID);
        }
    )
  }

  async bookText(workSlot: DoctorWorkslot) {
    const doctorTextSession = new DoctorTextSession(
        workSlot.id,
        workSlot.doctor,

    )
  }

  async bookVoice(workSlot: DoctorWorkslot) {
    console.log(workSlot);
  }

  async bookVideo(workSlot: DoctorWorkslot) {
    console.log(workSlot);
  }

}
