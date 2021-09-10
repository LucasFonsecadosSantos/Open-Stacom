import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEditionFormComponent } from './previous-edition-form.component';

describe('PreviousEditionFormComponent', () => {
  let component: PreviousEditionFormComponent;
  let fixture: ComponentFixture<PreviousEditionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousEditionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
