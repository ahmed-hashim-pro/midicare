import {
  APIService,
  CreatePatientInput,
  CreatePatientMutation,
  GetPatientQuery,
  UpdatePatientInput, UpdatePatientMutation
} from '@amazon/auto/API.service';
import {Patient} from '@core/model/patient';
import {Injectable} from '@angular/core';
@Injectable()
export class GqlPatientService {
  private service: APIService;

  constructor() {
    this.service = new APIService();
  }

  async findPatients () : Promise<Patient[]> {
    const patients = await this.service.ListPatients();
    return patients.items.map(
        (patient) => GqlPatientService.toPatient(patient)
    );
  }

  async findPatient (id: string) : Promise<Patient> {
    const patient = await this.service.GetPatient(id);
    return GqlPatientService.toPatient(patient);
  }

  async createPatient (input: Patient) : Promise<Patient> {
    const patient = await this.service.CreatePatient(
        <CreatePatientInput> {
          ...input
        }
    );
    return GqlPatientService.toPatient(patient);
  }

  async updatePatient (input: Patient) : Promise<Patient> {
    const patient = await this.service.UpdatePatient(
        <UpdatePatientInput> {
          ...input
        }
    );
    return GqlPatientService.toPatient(patient);
  }

  private static toPatient(input: GetPatientQuery | CreatePatientMutation | UpdatePatientMutation ) : Patient {
    return new Patient(
        input.id,
        input.name
    );
  }
}
