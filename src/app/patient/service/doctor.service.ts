import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Doctor} from '@core/model/doctor';
import {GqlDoctorService} from '@amazon/gql-doctor.service';

/**
 * Definition for the CRUD supplied interface
 * for the Doctor entity
 * the interface is implemented by a backend service
 */
export interface DoctorServiceProvider {
  findDoctors() : Promise<Doctor[]>
  findDoctor(id: string) : Promise<Doctor>
}

/**
 * Provides the business logic for the patient module
 * interacting with doctor, the service relies on
 * backend implementation 'Initiallay AWS Amplify GQL'
 * on managing the CRUD of Doctor entity
 */
@Injectable()
export class DoctorService {
  private service: DoctorServiceProvider;

  constructor(@Optional() @SkipSelf() private doctorService: DoctorService) {
    if (doctorService) {
      throw new Error('DoctorService is already injected');
    }
    // TODO: create a mechanism for dynamic imports
    this.service = new GqlDoctorService();
  }

  async findDoctors() : Promise<Doctor[]> {
    return await this.service.findDoctors();
  }

  async findDoctor(id: string) : Promise<Doctor> {
    return await this.service.findDoctor(id);
  }
}
