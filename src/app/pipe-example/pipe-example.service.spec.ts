import { TestBed } from '@angular/core/testing';

import { PipeExampleService } from './pipe-example.service';

describe('PipeExampleService', () => {
  let service: PipeExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
