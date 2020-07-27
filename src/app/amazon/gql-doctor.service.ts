import { Injectable } from '@angular/core';
import {Doctor} from "@core/model/doctor";
import {APIService, GetDoctorQuery, ListDoctorsQuery} from "@amazon/auto/API.generated";

@Injectable()
export class GqlDoctorService {

  constructor() {}

  async findDoctors () : Promise<Doctor[]> {
    const svc = new APIService();
    return GqlDoctorService.toDoctors(await svc.ListDoctors());
  }

  async findDoctor (id: string) : Promise<Doctor> {
    const svc = new APIService();
    return GqlDoctorService.toDoctor(await svc.GetDoctor(id));
  }

  private static toDoctors(input: ListDoctorsQuery) : Doctor[] {
    return input.items.map(
        (item) => {
          return new Doctor(
              item.id,
              item.name,
               item.insurance,
               item.description,
              item.specializations
          );
        }
    )
  }

  private static toDoctor(input: GetDoctorQuery) : Doctor {
    return new Doctor(
        input.id,
        input.name,
        input.insurance,
        input.description,
        input.specializations
    );
  }
}
