import { TestBed } from '@angular/core/testing';

import { AUTHService } from './auth.service';

describe('AUTHService', () => {
  let service: AUTHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AUTHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
