import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingsComponent } from './proceedings.component';

describe('ProceedingsComponent', () => {
  let component: ProceedingsComponent;
  let fixture: ComponentFixture<ProceedingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
