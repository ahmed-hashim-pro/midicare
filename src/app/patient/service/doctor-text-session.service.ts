import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorTextSession} from '@core/model/doctor-text-session';

export interface DoctorTextSessionServiceProvider {
  findDoctorTextSessions() : Promise<DoctorTextSession[]>;
  findDoctorTextSession(id: string) : Promise<DoctorTextSession>;
  createDoctorTextSession(input: DoctorTextSession) : Promise<DoctorTextSession>;
}

@Injectable()
export class DoctorTextSessionService {
  private service: DoctorTextSessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorTextSessionService: DoctorTextSessionService,
              @Inject('DoctorTextSessionServiceProvider')
              private doctorTextSessionServiceProvider: DoctorTextSessionServiceProvider) {
    if (doctorTextSessionService) {
      throw new Error('DoctorTextSessionService has been already injected');
    }
    this.service = doctorTextSessionServiceProvider;
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
