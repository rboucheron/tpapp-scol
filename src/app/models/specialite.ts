import { Ispecialite } from './ispecialite';
export class Specialite implements Ispecialite {
  constructor(public _libelle: string, public _idSpec: number) {}
}
