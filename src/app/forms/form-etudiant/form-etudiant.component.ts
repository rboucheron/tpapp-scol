import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrl: './form-etudiant.component.css',
})
export class FormEtudiantComponent implements OnInit {
  public etudients!: FormGroup;
  public nom!: string;
  public prenoms!: string;
  public rue!: string;
  public cp!: string;
  public ville!: string;
  public courriel!: string;
  public genre!: string;
  public age!: number;
  public idCand!: number;

  constructor() {}

  ngOnInit() {
    this.etudients = new FormGroup({
      nom: new FormControl(),
      prenoms: new FormControl(),
      rue: new FormControl(),
      cp: new FormControl(),
      ville: new FormControl(),
      courriel: new FormControl(),
      genre: new FormControl(),
      age: new FormControl(),
      idCand: new FormControl(),
    });
  }
  public creat() {
    this.nom = this.etudients.get('nom')?.value;
    this.prenoms = this.etudients.get('prenoms')?.value;
    this.rue = this.etudients.get('rue')?.value;
    this.cp = this.etudients.get('cp')?.value;
    this.ville = this.etudients.get('ville')?.value;
    this.courriel = this.etudients.get('courriel')?.value;
    this.genre = this.etudients.get('genre')?.value;
    this.age = this.etudients.get('age')?.value;
    this.idCand = this.etudients.get('idCand')?.value;
  }
}
