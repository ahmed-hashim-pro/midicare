import {Doctor} from '@core/model/doctor';
import {APIService, GetDoctorQuery, ListDoctorsQuery} from '@amazon/auto/API.service';
import {DoctorServiceProvider} from '@core/service/data/doctor.service';
import {Injectable} from '@angular/core';
@Injectable()
export class GqlDoctorService implements DoctorServiceProvider {

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
            item.specializations,
            item.email,
            item.title,
            item.mobileNumber,
            item.facebookPage,
            item.medicalLicsenceImage,
            item.medicalLicsenceNumber,
            item.clinicalAddress,
            item.clinicalPhone
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
      input.specializations,
      input.email,
      input.title,
      input.mobileNumber,
      input.facebookPage,
      input.medicalLicsenceImage,
      input.medicalLicsenceNumber,
      input.clinicalAddress,
      input.clinicalPhone
    );
  }
}
