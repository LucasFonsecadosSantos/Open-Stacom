import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeInfoComponent } from './committee-info.component';

describe('CommitteeInfoComponent', () => {
  let component: CommitteeInfoComponent;
  let fixture: ComponentFixture<CommitteeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
