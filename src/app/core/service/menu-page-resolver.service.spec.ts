import { TestBed } from '@angular/core/testing';

import { MenuPageResolverService } from './menu-page-resolver.service';

describe('MenuPageResolverService', () => {
  let service: MenuPageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
