import { TestBed } from '@angular/core/testing';

import { VideoGalleryCreateService } from './video-gallery-create.service';

describe('VideoGalleryCreateService', () => {
  let service: VideoGalleryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGalleryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
