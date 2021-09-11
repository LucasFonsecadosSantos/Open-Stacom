import { TestBed } from '@angular/core/testing';

import { PhotoGalleryDeleteService } from './photo-gallery-delete.service';

describe('PhotoGalleryDeleteService', () => {
  let service: PhotoGalleryDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
