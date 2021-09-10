import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEditionInfoComponent } from './previous-edition-info.component';

describe('PreviousEditionInfoComponent', () => {
  let component: PreviousEditionInfoComponent;
  let fixture: ComponentFixture<PreviousEditionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousEditionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEditionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
