import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreEventComponent } from './cadastre-event.component';

describe('CadastreEventComponent', () => {
  let component: CadastreEventComponent;
  let fixture: ComponentFixture<CadastreEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastreEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
