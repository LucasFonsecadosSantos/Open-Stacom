import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsFormComponent } from './calls-form.component';

describe('CallsFormComponent', () => {
  let component: CallsFormComponent;
  let fixture: ComponentFixture<CallsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
