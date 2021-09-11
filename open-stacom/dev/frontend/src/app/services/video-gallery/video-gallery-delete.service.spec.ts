import { TestBed } from '@angular/core/testing';

import { VideoGalleryDeleteService } from './video-gallery-delete.service';

describe('VideoGalleryDeleteService', () => {
  let service: VideoGalleryDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGalleryDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
