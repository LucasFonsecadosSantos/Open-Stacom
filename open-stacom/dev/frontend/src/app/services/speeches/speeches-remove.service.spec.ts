import { TestBed } from '@angular/core/testing';

import { SpeechesRemoveService } from './speeches-remove.service';

describe('SpeechesRemoveService', () => {
  let service: SpeechesRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechesRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
