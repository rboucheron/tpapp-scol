import { Component, OnInit } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecialiteService } from '../../services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent implements OnInit {
  public Specialites !: Array<Specialite>; 
  constructor(private SpecialiteService : SpecialiteService) {}
  ngOnInit(): void{
    this.Specialites = this.SpecialiteService.getSpecialites(); 

  }

}
