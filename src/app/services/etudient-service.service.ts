import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudient';

@Injectable({
  providedIn: 'root',
})
export class EtudientServiceService {
  private Etudients!: Array <Etudiant> ;
  constructor() {
    this.Etudients = [
      new Etudiant(
        'RIVAY',
        'Claude',
        '24 rue de Montreuil',
        '75020',
        'Paris',
        'no_adr1@vol.org',
        'Homme',
        20,
        10101
      ),
      new Etudiant(
        'BOUNAR',
        'Mehdi',
        '10 Bd. Voltaire',
        '75011',
        'Paris',
        'no_adr2@vol.org',
        'Homme',
        25,
        10201
      ),
      new Etudiant(
        'RATTIER',
        'Liza',
        '44 rue de Montreuil',
        '75020',
        'Paris',
        'no_adr10@vol.org',
        'Femme',
        19,
        11553
      ),
      new Etudiant(
        'Edme',
        'Liza',
        '12 rue de Montreuil',
        '75020',
        'Paris',
        'no_adr3@vol.org',
        'Femme',
        21,
        12124
      ),
      new Etudiant(
        'LEE',
        'Yan Fu',
        '113 Av. Gl De Gaule',
        '92000',
        'Nanterre',
        'no_adr4@vol.org',
        'Homme',
        22,
        21094
      ),
      new Etudiant(
        'VERIN',
        'Eric',
        '10-Bis rue Saint Maur',
        '77000',
        'Melun',
        'no_adr5@vol.org',
        'Homme',
        33,
        50001
      ),
      new Etudiant(
        'LEROY',
        'Axelle',
        '11 Av. Gl De Gaule',
        '77100',
        'Meaux',
        'no_adr6@vol.org',
        'Femme',
        40,
        55001
      ),
      new Etudiant(
        'FISCHER',
        'Morgane',
        '5 rue de la Pierre Levée',
        '94500',
        'Champigny/Marne',
        'no_adr7@vol.org',
        'Femme',
        41,
        65002
      ),
      new Etudiant(
        'BENALI',
        'Mira',
        '21 rue de Valvin',
        '94300',
        'Vincennes',
        'no_adr8@vol.org',
        'Femme',
        19,
        11576
      ),
      new Etudiant(
        'CEZAIRE',
        'Joël',
        '56 rue de Liege',
        '77550',
        'Moissy',
        'no_adr9@vol.org',
        'Homme',
        33,
        11131
      ),
    ];
  }
  public getEtudients() {
    return this.Etudients
  }
}
