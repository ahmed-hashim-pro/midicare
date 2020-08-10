import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {Session} from '@core/model/session';
import {Doctor} from '@core/model/doctor';

export interface SessionServiceProvider {
  findSessions() : Promise<Session[]>;
  findSession(id: string) : Promise<Session>;
  findSessionsByDoctor(doctor: Doctor): Promise<Session[]>;
  createSession(input: Session) : Promise<Session>;
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

  async findSessions() : Promise<Session[]> {
    return await this.service.findSessions();
  }

  async findSession(id: string) : Promise<Session> {
    return await this.service.findSession(id);
  }

  async createSession(input: Session) : Promise<Session> {
    return await this.service.createSession(input);
  }
}
