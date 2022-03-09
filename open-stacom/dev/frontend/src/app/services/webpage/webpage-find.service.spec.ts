import { TestBed } from '@angular/core/testing';

import { WebpageFindService } from './webpage-find.service';

describe('WebpageFindService', () => {
  let service: WebpageFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpageFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
