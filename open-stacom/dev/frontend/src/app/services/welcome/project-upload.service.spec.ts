import { TestBed } from '@angular/core/testing';

import { ProjectUploadService } from './project-upload.service';

describe('ProjectUploadService', () => {
  let service: ProjectUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
