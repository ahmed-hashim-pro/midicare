import {
    APIService, CreateDoctorTextSessionInput,
    GetDoctorTextSessionQuery,
} from '@amazon/auto/API.service';
import {Doctor} from '@core/model/doctor';
import {Patient} from '@core/model/patient';
import {SessionStatus} from '@core/model/session-status';
import {DoctorTextSession} from '@core/model/doctor-text-session';
import {DoctorTextSessionServiceProvider} from '@patient/service/doctor-text-session.service';
import {Injectable} from '@angular/core';
@Injectable()
export class GqlDoctorTextSessionService implements DoctorTextSessionServiceProvider {
  private service: APIService;
  constructor() {
    this.service = new APIService();
  }

  async findDoctorTextSessions() : Promise<DoctorTextSession[]> {
    const sessions = await this.service.ListDoctorTextSessions();
    return sessions.items.map((session) => {
        return GqlDoctorTextSessionService.toDoctorTextSession(session);
    });
  }

  async findDoctorTextSession(id: string) : Promise<DoctorTextSession> {
    const session = await this.service.GetDoctorTextSession(id);
    return GqlDoctorTextSessionService.toDoctorTextSession(session);
  }

  async createDoctorTextSession(input: DoctorTextSession) : Promise<DoctorTextSession> {
    const session = await this.service.CreateDoctorTextSession(
        <CreateDoctorTextSessionInput> {
          doctorID: input.doctor.id,
          patientID: input.patient.id,
          start_time: input.start_time,
          end_time: input.end_time,
          status: input.status
        }
    );
    return GqlDoctorTextSessionService.toDoctorTextSession(session);
  }

  static toDoctorTextSession (session: GetDoctorTextSessionQuery) : DoctorTextSession {
      return new DoctorTextSession(
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
