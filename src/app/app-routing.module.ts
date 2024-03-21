import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudientParisComponent } from './components/etudient-paris/etudient-paris.component';
import { EtudienthorsparisComponent } from './components/etudienthorsparis/etudienthorsparis.component';


const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'paris', component: EtudientParisComponent },
  { path: 'horsparis', component: EtudienthorsparisComponent}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
