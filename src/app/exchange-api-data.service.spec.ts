import { TestBed } from '@angular/core/testing';

import { ExchangeApiDataService } from './exchange-api-data.service';

describe('ExchangeApiDataService', () => {
  let service: ExchangeApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
