import { TestBed } from '@angular/core/testing';

import { PhotoGalleryCreateService } from './photo-gallery-create.service';

describe('PhotoGalleryCreateService', () => {
  let service: PhotoGalleryCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
