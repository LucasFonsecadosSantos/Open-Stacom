import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingFormComponent } from './proceeding-form.component';

describe('ProceedingFormComponent', () => {
  let component: ProceedingFormComponent;
  let fixture: ComponentFixture<ProceedingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
