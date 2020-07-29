import {
    APIService,
    CreateDoctorWorkSlotInput,
    ModelDoctorWorkSlotFilterInput
} from "@amazon/auto/API.generated";
import {DoctorWorkslot} from "@core/model/doctor-workslot";
import {Doctor} from "@core/model/doctor";

export class GqlDoctorWorkslotService {
  private service: APIService;

  constructor() {
      this.service = new APIService();
  }

  async findDoctorWorkSlots() : Promise<DoctorWorkslot[]> {
    const workSlots = await this.service.ListDoctorWorkSlots();
    return workSlots.items.map(
        (item) => {
          return new DoctorWorkslot(
              item.id,
              new Doctor(item.doctorID, null, null, null, null),
              item.start_time,
              item.end_time,
              item.capacity
          );
        }
    );
  }

  async findDoctorWorkSlot(id: string) : Promise<DoctorWorkslot> {
    const workSlot = await this.service.GetDoctorWorkSlot(id);
    return new DoctorWorkslot(
        workSlot.id,
        new Doctor(workSlot.doctorID, null, null, null, null),
        workSlot.start_time,
        workSlot.end_time,
        workSlot.capacity
    );
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

  async findDoctorWorkSlotsByDoctor(id: string): Promise<DoctorWorkslot[]> {
      const [{items}, doctor] = await Promise.all(
          [
                this.service.ListDoctorWorkSlots(<ModelDoctorWorkSlotFilterInput>{
                    doctorID: {
                        eq: id
                    }
                }),
                this.service.GetDoctor(id)
          ]);
      return items.map(
          (item) => {
              return new DoctorWorkslot(
                  item.id,
                  new Doctor(item.doctorID, doctor.name, doctor.insurance, doctor.description, doctor.specializations),
                  item.start_time,
                  item.end_time,
                  item.capacity
              );
          }
      );
  }
}
