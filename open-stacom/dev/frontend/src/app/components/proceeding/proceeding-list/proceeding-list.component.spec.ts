import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingListComponent } from './proceeding-list.component';

describe('ProceedingListComponent', () => {
  let component: ProceedingListComponent;
  let fixture: ComponentFixture<ProceedingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
