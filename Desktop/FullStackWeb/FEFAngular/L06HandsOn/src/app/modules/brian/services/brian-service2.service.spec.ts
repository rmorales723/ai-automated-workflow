import { TestBed, inject } from '@angular/core/testing';

import { BrianService2Service } from './brian-service2.service';

describe('BrianService2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrianService2Service]
    });
  });

  it('should be created', inject([BrianService2Service], (service: BrianService2Service) => {
    expect(service).toBeTruthy();
  }));
});
