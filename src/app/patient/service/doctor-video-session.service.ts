import {Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorVideoSession} from '@core/model/doctor-video-session';
import {GqlDoctorVideoSessionService} from '@amazon/gql-doctor-video-session.service';

export interface DoctorVideoSessionServiceProvider {
  findDoctorVideoSessions() : Promise<DoctorVideoSession[]>;
  findDoctorVideoSession(id: string) : Promise<DoctorVideoSession>;
  createDoctorVideoSession(input: DoctorVideoSession) : Promise<DoctorVideoSession>;
}

@Injectable()
export class DoctorVideoSessionService {
  private service: DoctorVideoSessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorVideoSessionService: DoctorVideoSessionService) {
    if (doctorVideoSessionService) {
      throw new Error('DoctorVideoSessionService has been already injected');
    }
    this.service = new GqlDoctorVideoSessionService();
  }

  async findDoctorVideoSessions() : Promise<DoctorVideoSession[]> {
    return await this.service.findDoctorVideoSessions();
  }

  async findDoctorVideoSession(id: string) : Promise<DoctorVideoSession> {
    return await this.service.findDoctorVideoSession(id);
  }

  async createDoctorVideoSession(input: DoctorVideoSession) : Promise<DoctorVideoSession> {
    return await this.service.createDoctorVideoSession(input);
  }
}
