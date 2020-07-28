import { Component, OnInit } from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {DoctorWorkSlotService} from '@patient/service/doctor-work-slot.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-list-doctor-work-slots',
  templateUrl: './list-doctor-work-slots.component.html',
  styleUrls: ['./list-doctor-work-slots.component.scss'],
})
export class ListDoctorWorkSlotsComponent implements OnInit {
  private doctorID: string;
  workSlots: DoctorWorkslot[];

  constructor(private doctorWorkSlotService: DoctorWorkSlotService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(
        async (params: ParamMap) => {
          this.doctorID = params.get('doctorID');
          this.workSlots = await this.doctorWorkSlotService.findDoctorWorkSlotsByDoctor(this.doctorID);
        }
    )
  }

}
