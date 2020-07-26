import { Injectable } from '@angular/core';
import {APIService, CreateDoctorWorkSlotInput, ListDoctorWorkSlotsQuery} from "@amazon/auto/API.generated";
import {DoctorWorkslot} from "@core/model/doctor-workslot";

@Injectable()
export class GqlDoctorWorkSlotService {

  constructor() {}

  async findDoctorWorkSlots() : Promise<DoctorWorkslot[]> {
    const svc = new APIService();
    const workSlots = await svc.ListDoctorWorkSlots();
    return workSlots.items.map(
        (item) => {
          return new DoctorWorkslot(
              item.id,
              item.doctorID,
              item.start_time,
              item.end_time,
              item.capacity
          );
        }
    );
  }

  async findDoctorWorkSlot(input: DoctorWorkslot) : Promise<DoctorWorkslot> {
    const svc = new APIService();
    const workSlot = await svc.GetDoctorWorkSlot(input.id);
    return new DoctorWorkslot(
        workSlot.id,
        workSlot.doctorID,
        workSlot.start_time,
        workSlot.end_time,
        workSlot.capacity
    );
  }

  async createDoctorWorkSlot(input: DoctorWorkslot) {
    const svc = new APIService();
    return await svc.CreateDoctorWorkSlot(
        <CreateDoctorWorkSlotInput> {
          doctorID: input.doctorid,
          start_time: input.start_time,
          end_time: input.end_time,
          capacity: input.capacity
        }
    )
  }
}
