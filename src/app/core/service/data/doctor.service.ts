import {Inject, Injectable, Optional, SkipSelf} from '@angular/core';
import {Doctor} from '@core/model/doctor';

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

  constructor(@Optional() @SkipSelf() private doctorService: DoctorService,
              @Inject('DoctorServiceProvider') private doctorServiceProvider) {
    if (doctorService) {
      throw new Error('DoctorService is already injected');
    }
    this.service = doctorServiceProvider;
  }

  async findDoctors() : Promise<Doctor[]> {
    return await this.service.findDoctors();
  }

  async findDoctor(id: string) : Promise<Doctor> {
    return await this.service.findDoctor(id);
  }
}
