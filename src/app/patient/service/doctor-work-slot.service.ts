import {Injectable, Optional, SkipSelf} from '@angular/core';
import {GqlDoctorWorkslotService} from '@amazon/gql-doctor-workslot.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';

export interface DoctorWorkSlotServiceProvider {
  findDoctorWorkSlotsByDoctor(id: string): Promise<DoctorWorkslot[]>
}

@Injectable()
export class DoctorWorkSlotService {
  private service: DoctorWorkSlotServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorWorkSlotService: DoctorWorkSlotService) {
    if (doctorWorkSlotService) {
      throw new Error('DoctorWorkSlotService has been already injected');
    }
    this.service = new GqlDoctorWorkslotService();
  }

  async findDoctorWorkSlotsByDoctor(id: string) : Promise<DoctorWorkslot[]> {
    return await this.service.findDoctorWorkSlotsByDoctor(id);
  }
}
