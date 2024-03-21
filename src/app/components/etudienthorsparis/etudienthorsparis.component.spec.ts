import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudienthorsparisComponent } from './etudienthorsparis.component';

describe('EtudienthorsparisComponent', () => {
  let component: EtudienthorsparisComponent;
  let fixture: ComponentFixture<EtudienthorsparisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudienthorsparisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudienthorsparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
