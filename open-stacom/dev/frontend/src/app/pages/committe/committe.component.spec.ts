import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteComponent } from './committe.component';

describe('CommitteComponent', () => {
  let component: CommitteComponent;
  let fixture: ComponentFixture<CommitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
