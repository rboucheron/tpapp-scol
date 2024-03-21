import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrls: ['./form-specialite.component.css']
})
export class FormSpecialiteComponent implements OnInit {
  public form!: FormGroup; 
  public nom!: string; 
  public id!: number; 

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      nom: new FormControl(), 
      id: new FormControl() 
    });

  }

  public creat() {
    this.nom = this.form.get('nom')?.value; 
    this.id = this.form.get('id')?.value;
    console.log(this.form.get('nom')?.value);
  }
}
