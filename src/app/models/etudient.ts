import { ietudient } from './ietudiant';
export class Etudiant implements ietudient {
  constructor(
    public _nom: string,
    public _prenoms: string,
    public _rue: string,
    public _cp: string,
    public _ville: string,
    public _courriel: string,
    public _genre: string,
    public _age: number,
    public _idCand: number
  ) {}
}
