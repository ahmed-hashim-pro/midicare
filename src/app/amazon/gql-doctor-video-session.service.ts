import {DoctorVideoSession} from '@core/model/doctor-video-session';
import {APIService, CreateDoctorVideoSessionInput} from '@amazon/auto/API.generated';
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
      return new DoctorVideoSession(
          item.id,
          new Doctor(item.doctorID, null,null,null,null),
          new Patient(item.patientID, null),
          item.start_time,
          item.end_time,
          <SessionStatus>item.status
      );
    });
  }

  async findDoctorVideoSession(id: string, doctorid: string, patientid: string) : Promise<DoctorVideoSession> {
    const session = await this.service.GetDoctorVideoSession(id, doctorid, patientid);
    return new DoctorVideoSession(
        session.id,
        new Doctor(
            session.doctorID,
            session.doctor.name,
            session.doctor.insurance,
            session.doctor.description,
            session.doctor.specializations
        ),
        new Patient(
            session.patientID,
            session.patient.name
        ),
        session.start_time,
        session.end_time,
        <SessionStatus>session.status
    );
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
    return new DoctorVideoSession(
      session.id,
      new Doctor(
          session.doctorID,
          session.doctor.name,
          session.doctor.insurance,
          session.doctor.description,
          session.doctor.specializations
      ),
      new Patient(
          session.patientID,
          session.patient.name
      ),
      session.start_time,
      session.end_time,
      <SessionStatus>session.status
    )
  }
}
