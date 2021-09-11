import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryViewModalComponent } from './photo-gallery-view-modal.component';

describe('PhotoGalleryViewModalComponent', () => {
  let component: PhotoGalleryViewModalComponent;
  let fixture: ComponentFixture<PhotoGalleryViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
