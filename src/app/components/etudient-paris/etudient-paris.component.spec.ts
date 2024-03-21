import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudientParisComponent } from './etudient-paris.component';

describe('EtudientParisComponent', () => {
  let component: EtudientParisComponent;
  let fixture: ComponentFixture<EtudientParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudientParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudientParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
