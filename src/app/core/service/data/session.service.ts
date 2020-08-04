import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {Session} from '@core/model/session';

export interface SessionServiceProvider {
  findDoctorAudioSessions() : Promise<Session[]>;
  findDoctorAudioSession(id: string) : Promise<Session>;
  createDoctorAudioSession(input: Session) : Promise<Session>;
}

@Injectable()
export class SessionService {
  private service: SessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorAudioSessionService: SessionService,
              @Inject('SessionServiceProvider') private SessionServiceProvider) {
    if (doctorAudioSessionService) {
      throw new Error('SessionService has been already injected');
    }
    this.service = SessionServiceProvider;
  }

  async findDoctorAudioSessions() : Promise<Session[]> {
    return await this.service.findDoctorAudioSessions();
  }

  async findDoctorAudioSession(id: string) : Promise<Session> {
    return await this.service.findDoctorAudioSession(id);
  }

  async createDoctorAudioSession(input: Session) : Promise<Session> {
    return await this.service.createDoctorAudioSession(input);
  }
}
