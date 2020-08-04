import { APIService } from '@amazon/auto/API.service';
import {Doctor} from '@core/model/doctor';
import {Patient} from '@core/model/patient';
import {SessionStatus, SessionType, Session} from '@core/model/session';
import {Injectable} from '@angular/core';
@Injectable()
export class GqlSessionService {
  private service: APIService;
  constructor() {
    this.service = new APIService();
  }

  async findSessions() : Promise<Session[]> {
    const sessions = await this.service.ListSessions();
    return sessions.items.map((session) => {
        return GqlSessionService.toSession(session);
    });
  }

  async findSession(id: string) : Promise<Session> {
    const session = await this.service.GetSession(id);
    return GqlSessionService.toSession(session);
  }

  async createSession(input: Session) : Promise<Session> {
    const session = await this.service.CreateSession(
        <mutationCreateSessionInput> {
          doctorID: input.doctor.id,
          patientID: input.patient.id,
          start_time: input.start_time,
          end_time: input.end_time,
          status: input.status,
          type: input.type
        }
    );
    return GqlSessionService.toSession(session);
  }

  async updateSession(input: Session) : Promise<Session> {
      const session = await this.service.UpdateSession(
          <mutationUpdateSessionInput> {
              id: input.id,
              doctorID: input.doctor.id,
              patientID: input.patient.id,
              start_time: input.start_time,
              end_time: input.end_time,
              status: input.status,
              type: input.type
          }
      );
      return GqlSessionService.toSession(session);
  }

  // TODO: Fix the typing for the session
  static toSession (session: any) : Session {
      return new Session(
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
          <SessionStatus>session.status,
          <SessionType>session.type
      );
  }
}
