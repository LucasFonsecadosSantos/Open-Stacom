import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateChoiceComponent } from './template-choice.component';

describe('TemplateChoiceComponent', () => {
  let component: TemplateChoiceComponent;
  let fixture: ComponentFixture<TemplateChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
