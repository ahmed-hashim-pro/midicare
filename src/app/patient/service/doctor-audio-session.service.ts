import {Injectable, Optional, SkipSelf} from '@angular/core';
import {DoctorAudioSession} from '@core/model/doctor-audio-session';
import {GqlDoctorAudioSessionService} from '@amazon/gql-doctor-audio-session.service';

export interface DoctorAudioSessionServiceProvider {
  findDoctorAudioSessions() : Promise<DoctorAudioSession[]>;
  findDoctorAudioSession(id: string) : Promise<DoctorAudioSession>;
  createDoctorAudioSession(input: DoctorAudioSession) : Promise<DoctorAudioSession>;
}

@Injectable()
export class DoctorAudioSessionService {
  private service: DoctorAudioSessionServiceProvider;
  constructor(@Optional() @SkipSelf() private doctorAudioSessionService: DoctorAudioSessionService) {
    if (doctorAudioSessionService) {
      throw new Error('DoctorAudioSessionService has been already injected');
    }
    this.service = new GqlDoctorAudioSessionService();
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
