import {DoctorVideoSession} from '@core/model/doctor-video-session';
import {APIService, CreateDoctorVideoSessionInput, GetDoctorVideoSessionQuery} from '@amazon/auto/API.service';
import {Doctor} from '@core/model/doctor';
import {Patient} from '@core/model/patient';
import {SessionStatus} from '@core/model/session-status';

export class GqlDoctorVideoSessionService {
  private service: APIService;
  constructor() {
    this.service = new APIService();
  }

  async findDoctorVideoSessions() : Promise<DoctorVideoSession[]> {
    const sessions = await this.service.ListDoctorVideoSessions();
    return sessions.items.map((item) => {
        return GqlDoctorVideoSessionService.toDoctorVideoSession(item);
    });
  }

  async findDoctorVideoSession(id: string) : Promise<DoctorVideoSession> {
    const session = await this.service.GetDoctorVideoSession(id);
    return GqlDoctorVideoSessionService.toDoctorVideoSession(session);
  }

  async createDoctorVideoSession(input: DoctorVideoSession) : Promise<DoctorVideoSession> {
    const session = await this.service.CreateDoctorVideoSession(
        <CreateDoctorVideoSessionInput> {
          doctorID: input.doctor.id,
          patientID: input.patient.id,
          start_time: input.start_time,
          end_time: input.end_time,
          status: input.status
        }
    );
    return GqlDoctorVideoSessionService.toDoctorVideoSession(session);
  }

  static toDoctorVideoSession (session: GetDoctorVideoSessionQuery) : DoctorVideoSession {
      return new DoctorVideoSession(
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
