import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorVideoSession} from '@core/model/doctor-video-session';

export interface DoctorVideoSessionServiceProvider {
  findDoctorVideoSessions() : Promise<DoctorVideoSession[]>;
  findDoctorVideoSession(id: string) : Promise<DoctorVideoSession>;
  createDoctorVideoSession(input: DoctorVideoSession) : Promise<DoctorVideoSession>;
}

@Injectable()
export class DoctorVideoSessionService {
  private service: DoctorVideoSessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorVideoSessionService: DoctorVideoSessionService,
              @Inject('DoctorVideoSessionServiceProvider')
              private doctorVideoSessionServiceProvider: DoctorVideoSessionServiceProvider) {
    if (doctorVideoSessionService) {
      throw new Error('DoctorVideoSessionService has been already injected');
    }
    this.service = doctorVideoSessionServiceProvider;
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
