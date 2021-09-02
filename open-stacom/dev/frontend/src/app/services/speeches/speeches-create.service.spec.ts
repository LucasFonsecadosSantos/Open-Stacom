import { TestBed } from '@angular/core/testing';

import { SpeechesCreateService } from './speeches-create.service';

describe('SpeechesCreateService', () => {
  let service: SpeechesCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechesCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
