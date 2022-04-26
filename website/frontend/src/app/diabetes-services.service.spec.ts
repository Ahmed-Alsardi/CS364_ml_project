import { TestBed } from '@angular/core/testing';

import { DiabetesServicesService } from './diabetes-services.service';

describe('DiabetesServicesService', () => {
  let service: DiabetesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
