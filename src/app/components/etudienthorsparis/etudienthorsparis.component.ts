import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudient';
import { EtudientServiceService } from '../../services/etudient-service.service';

@Component({
  selector: 'app-etudienthorsparis',
  templateUrl: './etudienthorsparis.component.html',
  styleUrl: './etudienthorsparis.component.css',
})
export class EtudienthorsparisComponent implements OnInit {
  public Etudients!: Array<Etudiant>;
  constructor(private EtudientService: EtudientServiceService) {}
  ngOnInit(): void {
    this.Etudients = this.EtudientService.getEtudients();
  }
}
