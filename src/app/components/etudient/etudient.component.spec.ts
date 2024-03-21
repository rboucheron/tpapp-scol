import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudientComponent } from './etudient.component';

describe('EtudientComponent', () => {
  let component: EtudientComponent;
  let fixture: ComponentFixture<EtudientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
