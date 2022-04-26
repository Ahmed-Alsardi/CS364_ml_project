import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesFormsComponent } from './diabetes-forms.component';

describe('DiabetesFormsComponent', () => {
  let component: DiabetesFormsComponent;
  let fixture: ComponentFixture<DiabetesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
