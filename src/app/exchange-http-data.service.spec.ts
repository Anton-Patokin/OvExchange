import { TestBed, inject } from '@angular/core/testing';

import { ExchangeHttpDataService } from './currency_overview/exchange-http-data.service';

describe('ExchangeHttpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeHttpDataService]
    });
  });

  it('should be created', inject([ExchangeHttpDataService], (service: ExchangeHttpDataService) => {
    expect(service).toBeTruthy();
  }));
});
