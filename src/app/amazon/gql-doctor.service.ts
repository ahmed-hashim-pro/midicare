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

  async findDoctor (input: Doctor) : Promise<Doctor> {
    const svc = new APIService();
    return GqlDoctorService.toDoctor(await svc.GetDoctor(input.id));
  }

  private static toDoctors(input: ListDoctorsQuery) : Doctor[] {
    return input.items.map(
        (item) => {
          return new Doctor(
              item.name,
               item.insurance,
               item.description,
              item.specializations,
              item.id
          );
        }
    )
  }

  private static toDoctor(input: GetDoctorQuery) : Doctor {
    return new Doctor(
        input.name,
        input.insurance,
        input.description,
        input.specializations,
        input.id
    );
  }
}
