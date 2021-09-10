import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEditionsComponent } from './previous-editions.component';

describe('PreviousEditionsComponent', () => {
  let component: PreviousEditionsComponent;
  let fixture: ComponentFixture<PreviousEditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousEditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
