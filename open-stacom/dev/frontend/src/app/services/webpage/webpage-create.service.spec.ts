import { TestBed } from '@angular/core/testing';

import { WebpageCreateService } from './webpage-create.service';

describe('WebpageCreateService', () => {
  let service: WebpageCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpageCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
