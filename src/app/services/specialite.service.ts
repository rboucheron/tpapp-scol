import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root',
})
export class SpecialiteService {
  private specialites!: Array<Specialite>;
  constructor() {
    this.specialites = [
      new Specialite('DEV APP', 1),
      new Specialite('ING RESEAUX', 2),
      new Specialite('INTEGRATEUR', 3),
      new Specialite('CHEF DE PROJET', 4),
      new Specialite('INFOGRAPHISTE', 5),
      new Specialite('UX DESIGNER', 6),
      new Specialite('DEVELOPPEUR MOBILE', 7),
    ];
  }
  public getSpecialites() {
    return this.specialites; 
  }
}
