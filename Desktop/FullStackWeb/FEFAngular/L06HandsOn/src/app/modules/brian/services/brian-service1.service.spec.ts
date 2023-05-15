import { TestBed, inject } from '@angular/core/testing';

import { BrianService1Service } from './brian-service1.service';

describe('BrianService1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrianService1Service]
    });
  });

  it('should be created', inject([BrianService1Service], (service: BrianService1Service) => {
    expect(service).toBeTruthy();
  }));
});
