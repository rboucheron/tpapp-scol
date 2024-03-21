import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudient';
import { EtudientServiceService } from '../../services/etudient-service.service';
@Component({
  selector: 'app-etudient-paris',
  templateUrl: './etudient-paris.component.html',
  styleUrl: './etudient-paris.component.css'
})
export class EtudientParisComponent implements OnInit {
  public Etudients !: Array<Etudiant>; 
  constructor(private EtudientService : EtudientServiceService){}
  ngOnInit(): void {
    this.Etudients = this.EtudientService.getEtudients(); 
  }
}
