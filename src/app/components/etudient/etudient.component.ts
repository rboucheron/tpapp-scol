import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudient';
import { EtudientServiceService } from '../../services/etudient-service.service';

@Component({
  selector: 'app-etudient',
  templateUrl: './etudient.component.html',
  styleUrl: './etudient.component.css'
})
export class EtudientComponent implements OnInit {
  public Etudients !: Array<Etudiant>; 
  constructor(private EtudientService : EtudientServiceService){}
  ngOnInit(): void {
    this.Etudients = this.EtudientService.getEtudients(); 
  }

}
