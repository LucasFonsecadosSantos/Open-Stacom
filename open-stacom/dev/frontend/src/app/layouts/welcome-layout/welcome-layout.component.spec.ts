import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLayoutComponent } from './welcome-layout.component';

describe('WelcomeLayoutComponent', () => {
  let component: WelcomeLayoutComponent;
  let fixture: ComponentFixture<WelcomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
