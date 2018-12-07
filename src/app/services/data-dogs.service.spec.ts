import { TestBed } from '@angular/core/testing';

import { DataDogsService } from './data-dogs.service';

describe('DataDogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDogsService = TestBed.get(DataDogsService);
    expect(service).toBeTruthy();
  });
});
