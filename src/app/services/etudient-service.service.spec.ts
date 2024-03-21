import { TestBed } from '@angular/core/testing';

import { EtudientServiceService } from './etudient-service.service';

describe('EtudientServiceService', () => {
  let service: EtudientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
