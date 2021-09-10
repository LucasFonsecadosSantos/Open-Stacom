import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorInfoComponent } from './sponsor-info.component';

describe('SponsorInfoComponent', () => {
  let component: SponsorInfoComponent;
  let fixture: ComponentFixture<SponsorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
