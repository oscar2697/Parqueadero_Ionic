import { TestBed } from '@angular/core/testing';

import { AccessService } from './acceso.service';

describe('AccessService', () => {
  let service: AccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
