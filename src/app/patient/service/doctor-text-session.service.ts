import {Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorTextSession} from '@core/model/doctor-text-session';
import {GqlDoctorTextSessionService} from '@amazon/gql-doctor-text-session.service';

export interface DoctorTextSessionServiceProvider {
  findDoctorTextSessions() : Promise<DoctorTextSession[]>;
  findDoctorTextSession(id: string) : Promise<DoctorTextSession>;
  createDoctorTextSession(input: DoctorTextSession) : Promise<DoctorTextSession>;
}

@Injectable()
export class DoctorTextSessionService {
  private service: DoctorTextSessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorTextSessionService: DoctorTextSessionService) {
    if (doctorTextSessionService) {
      throw new Error('DoctorTextSessionService has been already injected');
    }
    this.service = new GqlDoctorTextSessionService();
  }

  async findDoctorTextSessions() : Promise<DoctorTextSession[]> {
    return await this.service.findDoctorTextSessions();
  }

  async findDoctorTextSession(id: string) : Promise<DoctorTextSession> {
    return await this.service.findDoctorTextSession(id);
  }

  async createDoctorTextSession(input: DoctorTextSession) : Promise<DoctorTextSession> {
    return await this.service.createDoctorTextSession(input);
  }
}
