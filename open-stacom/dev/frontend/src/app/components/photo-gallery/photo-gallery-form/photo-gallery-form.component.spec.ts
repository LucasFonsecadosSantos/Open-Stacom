import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryFormComponent } from './photo-gallery-form.component';

describe('PhotoGalleryFormComponent', () => {
  let component: PhotoGalleryFormComponent;
  let fixture: ComponentFixture<PhotoGalleryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
