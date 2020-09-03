import {
    APIService,
    mutationCreateDoctorWorkSlotInput, GetDoctorWorkSlotQuery,
    ModelDoctorWorkSlotFilterInput, SessionType
} from '@amazon/auto/API.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {Doctor} from '@core/model/doctor';
import {DoctorWorkSlotServiceProvider} from '@core/service/data/doctor-work-slot.service';
import {Injectable} from '@angular/core';
@Injectable()
export class GqlDoctorWorkslotService implements DoctorWorkSlotServiceProvider {
  private service: APIService;

  constructor() {
      this.service = new APIService();
  }

  async findDoctorWorkSlots() : Promise<DoctorWorkslot[]> {
    const workSlots = await this.service.ListDoctorWorkSlots();
    return workSlots.items.map(
        (workSlot) => {
          return GqlDoctorWorkslotService.toDoctorWorkslot(workSlot);
        }
    );
  }

  async findDoctorWorkSlot(id: string) : Promise<DoctorWorkslot> {
    const workSlot = await this.service.GetDoctorWorkSlot(id);
    return GqlDoctorWorkslotService.toDoctorWorkslot(workSlot);
  }

  async createDoctorWorkSlot(input: DoctorWorkslot) : Promise<DoctorWorkslot> {
    const workSlot = await this.service.CreateDoctorWorkSlot(
        <mutationCreateDoctorWorkSlotInput> {
            doctor_id: input.doctor.id,
            email:input.doctor.email,
            name:input.doctor.name,
            start_time: input.startTime,
            end_time: input.endTime,
            capacity: input.capacity,
            allowed_sessions: <SessionType[]>input.allowedSessions
        }
    )
    return GqlDoctorWorkslotService.toDoctorWorkslot(workSlot);
  }

  async findDoctorWorkSlotsByDoctor(id: string): Promise<DoctorWorkslot[]> {
      const doctorWorkSlots = await this.service.ListDoctorWorkSlots(<ModelDoctorWorkSlotFilterInput>{
          doctor_id: {
              eq: id
          }
      });
      return doctorWorkSlots.items.map(
          (workSlot) => {
              return GqlDoctorWorkslotService.toDoctorWorkslot(workSlot);
          }
      );
  }

  static toDoctorWorkslot (workSlot: GetDoctorWorkSlotQuery) : DoctorWorkslot {
      return new DoctorWorkslot(
          workSlot.id,
          new Doctor(
            workSlot.doctor_id,
            workSlot.doctor.name,
            workSlot.doctor.insurance,
            workSlot.doctor.description,
            workSlot.doctor.specializations,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ),
          workSlot.start_time,
          workSlot.end_time,
          workSlot.capacity,
          workSlot.allowed_sessions
      )
  }
}
