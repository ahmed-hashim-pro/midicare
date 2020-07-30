import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorAudioSession} from '@core/model/doctor-audio-session';

export interface DoctorAudioSessionServiceProvider {
  findDoctorAudioSessions() : Promise<DoctorAudioSession[]>;
  findDoctorAudioSession(id: string) : Promise<DoctorAudioSession>;
  createDoctorAudioSession(input: DoctorAudioSession) : Promise<DoctorAudioSession>;
}

@Injectable()
export class DoctorAudioSessionService {
  private service: DoctorAudioSessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorAudioSessionService: DoctorAudioSessionService,
              @Inject('DoctorAudioSessionServiceProvider') private doctorAudioSessionServiceProvider) {
    if (doctorAudioSessionService) {
      throw new Error('DoctorAudioSessionService has been already injected');
    }
    this.service = doctorAudioSessionServiceProvider;
  }

  async findDoctorAudioSessions() : Promise<DoctorAudioSession[]> {
    return await this.service.findDoctorAudioSessions();
  }

  async findDoctorAudioSession(id: string) : Promise<DoctorAudioSession> {
    return await this.service.findDoctorAudioSession(id);
  }

  async createDoctorAudioSession(input: DoctorAudioSession) : Promise<DoctorAudioSession> {
    return await this.service.createDoctorAudioSession(input);
  }
}
