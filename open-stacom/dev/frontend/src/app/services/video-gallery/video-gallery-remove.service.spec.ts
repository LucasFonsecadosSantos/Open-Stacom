import { TestBed } from '@angular/core/testing';

import { VideoGalleryRemoveService } from './video-gallery-remove.service';

describe('VideoGalleryRemoveService', () => {
  let service: VideoGalleryRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGalleryRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
