import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionComponent } from './connexion.component';



const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }