import {
    APIService,
    CreateDoctorVideoSessionInput,
    GetDoctorAudioSessionQuery,
} from '@amazon/auto/API.service';
import {Doctor} from '@core/model/doctor';
import {Patient} from '@core/model/patient';
import {SessionStatus} from '@core/model/session-status';
import {DoctorAudioSession} from '@core/model/doctor-audio-session';

export class GqlDoctorAudioSessionService {
  private service: APIService;
  constructor() {
    this.service = new APIService();
  }

  async findDoctorAudioSessions() : Promise<DoctorAudioSession[]> {
    const sessions = await this.service.ListDoctorAudioSessions();
    return sessions.items.map((session) => {
        return GqlDoctorAudioSessionService.toDoctorAudioSession(session);
    });
  }

  async findDoctorAudioSession(id: string) : Promise<DoctorAudioSession> {
    const session = await this.service.GetDoctorAudioSession(id);
    return GqlDoctorAudioSessionService.toDoctorAudioSession(session);
  }

  async createDoctorAudioSession(input: DoctorAudioSession) : Promise<DoctorAudioSession> {
    const session = await this.service.CreateDoctorAudioSession(
        <CreateDoctorVideoSessionInput> {
          doctorID: input.doctor.id,
          patientID: input.patient.id,
          start_time: input.start_time,
          end_time: input.end_time,
          status: input.status
        }
    );
    return GqlDoctorAudioSessionService.toDoctorAudioSession(session);
  }

  static toDoctorAudioSession (session: GetDoctorAudioSessionQuery) : DoctorAudioSession {
      return new DoctorAudioSession(
          session.id,
          new Doctor(
              session.doctor.id,
              session.doctor.name,
              session.doctor.insurance,
              session.doctor.description,
              session.doctor.specializations
          ),
          new Patient(
              session.patient.id,
              session.patient.name
          ),
          session.start_time,
          session.end_time,
          <SessionStatus>session.status
      );
  }
}
