import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsInfoComponent } from './calls-info.component';

describe('CallsInfoComponent', () => {
  let component: CallsInfoComponent;
  let fixture: ComponentFixture<CallsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
