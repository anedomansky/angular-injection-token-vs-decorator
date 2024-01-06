import { TestBed } from '@angular/core/testing';

import { SparteService } from './sparte.service';

describe('SparteService', () => {
  let service: SparteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
