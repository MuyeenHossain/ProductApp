import { TestBed } from '@angular/core/testing';

import { AllApiService } from './all-api.service';

describe('AllApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllApiService = TestBed.get(AllApiService);
    expect(service).toBeTruthy();
  });
});
