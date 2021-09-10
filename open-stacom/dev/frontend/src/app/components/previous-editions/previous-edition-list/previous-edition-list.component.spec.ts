import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEditionListComponent } from './previous-edition-list.component';

describe('PreviousEditionListComponent', () => {
  let component: PreviousEditionListComponent;
  let fixture: ComponentFixture<PreviousEditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousEditionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
