import {
    APIService,
    CreateDoctorWorkSlotInput, GetDoctorWorkSlotQuery,
    ModelDoctorWorkSlotFilterInput
} from '@amazon/auto/API.service';
import {DoctorWorkslot} from '@core/model/doctor-workslot';
import {Doctor} from '@core/model/doctor';
import {DoctorWorkSlotServiceProvider} from '@patient/service/doctor-work-slot.service';
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
        <CreateDoctorWorkSlotInput> {
            doctorID: input.doctor.id,
            start_time: input.start_time,
            end_time: input.end_time,
            capacity: input.capacity
        }
    )
    return GqlDoctorWorkslotService.toDoctorWorkslot(workSlot);
  }

  async findDoctorWorkSlotsByDoctor(id: string): Promise<DoctorWorkslot[]> {
      const doctorWorkSlots = await this.service.ListDoctorWorkSlots(<ModelDoctorWorkSlotFilterInput>{
          doctorID: {
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
              workSlot.doctorID,
              workSlot.doctor.name,
              workSlot.doctor.insurance,
              workSlot.doctor.description,
              workSlot.doctor.specializations
          ),
          workSlot.start_time,
          workSlot.end_time,
          workSlot.capacity
      )
  }
}
