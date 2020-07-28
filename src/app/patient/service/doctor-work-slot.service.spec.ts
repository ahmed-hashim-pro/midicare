import { TestBed } from '@angular/core/testing';

import { DoctorWorkSlotService } from './doctor-work-slot.service';

describe('DoctorWorkSlotService', () => {
  let service: DoctorWorkSlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorWorkSlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
