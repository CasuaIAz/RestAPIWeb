import { TestBed } from '@angular/core/testing';

import { RentadvertisementService } from './rentadvertisement.service';

describe('RentadvertisementService', () => {
  let service: RentadvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentadvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
