import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingInfoComponent } from './proceeding-info.component';

describe('ProceedingInfoComponent', () => {
  let component: ProceedingInfoComponent;
  let fixture: ComponentFixture<ProceedingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
