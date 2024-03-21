import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpecialiteComponent } from './form-specialite.component';

describe('FormSpecialiteComponent', () => {
  let component: FormSpecialiteComponent;
  let fixture: ComponentFixture<FormSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSpecialiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
