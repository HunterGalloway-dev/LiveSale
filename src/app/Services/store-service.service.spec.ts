import { TestBed } from '@angular/core/testing';

import { StoreServiceService } from './store-service.service';

describe('StoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreServiceService = TestBed.get(StoreServiceService);
    expect(service).toBeTruthy();
  });
});
