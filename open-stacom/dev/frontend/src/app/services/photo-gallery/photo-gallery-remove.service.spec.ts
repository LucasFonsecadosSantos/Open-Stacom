import { TestBed } from '@angular/core/testing';

import { PhotoGalleryRemoveService } from './photo-gallery-remove.service';

describe('PhotoGalleryRemoveService', () => {
  let service: PhotoGalleryRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
