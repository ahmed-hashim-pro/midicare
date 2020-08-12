import { TestBed } from '@angular/core/testing';

import { WEBRTCService } from './webrtc.service';

describe('WEBRTCService', () => {
  let service: WEBRTCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WEBRTCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
