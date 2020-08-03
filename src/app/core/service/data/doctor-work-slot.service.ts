import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorWorkslot} from '@core/model/doctor-workslot';

export interface DoctorWorkSlotServiceProvider {
  findDoctorWorkSlotsByDoctor(id: string): Promise<DoctorWorkslot[]>
}

@Injectable()
export class DoctorWorkSlotService {
  private service: DoctorWorkSlotServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorWorkSlotService: DoctorWorkSlotService,
              @Inject('DoctorWorkSlotServiceProvider')
              private doctorWorkSlotServiceProvider : DoctorWorkSlotServiceProvider) {
    if (doctorWorkSlotService) {
      throw new Error('DoctorWorkSlotService has been already injected');
    }
    this.service = doctorWorkSlotServiceProvider;
  }

  async findDoctorWorkSlotsByDoctor(id: string) : Promise<DoctorWorkslot[]> {
    return await this.service.findDoctorWorkSlotsByDoctor(id);
  }
}
