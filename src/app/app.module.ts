import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EtudientComponent } from './components/etudient/etudient.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { AppRoutingModule } from './app-routing.module';
import { EtudientParisComponent } from './components/etudient-paris/etudient-paris.component';
import { EtudienthorsparisComponent } from './components/etudienthorsparis/etudienthorsparis.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EtudientComponent,
    SpecialiteComponent,
    EtudientParisComponent,
    EtudienthorsparisComponent,
    FooterComponent,
    FormSpecialiteComponent,
    FormEtudiantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
