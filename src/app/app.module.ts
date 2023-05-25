
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './commun/menu/menu.component';
import { PatientChoixComponent } from './patient/patient-choix/patient-choix.component';
import { ConnexionComponent } from './compte/connexion/connexion.component';
import { AcceuilComponent } from './commun/acceuil/acceuil.component';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import{HttpClientModule} from'@angular/common/http';
import { InscriptionComponent } from './compte/inscription/inscription.component';
import { MedecinAcceuilComponent } from './medecin/medecin-acceuil/medecin-acceuil.component';
import { BlogComponent } from './commun/blog/blog.component';
import { AddpostComponent } from './medecin/addpost/addpost.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { PatientradioComponent } from './patient/patientradio/patientradio.component';


const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent},
  { path: 'acceuilPatient', component: PatientChoixComponent},
  { path: 'acceuilMedecin', component: MedecinAcceuilComponent},
  {path: '', component :AcceuilComponent},
  {path: 'inscription', component :InscriptionComponent },
  {path: 'blogs',component:BlogComponent},
  {path: 'ajouterPost',component:AddpostComponent},
  {path: 'deposerRadiographie',component:PatientradioComponent},
  {path: 'repondreForm',component:PatientFormComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PatientChoixComponent,
    ConnexionComponent,
    AcceuilComponent,
    InscriptionComponent,
    MedecinAcceuilComponent,
    BlogComponent,
    AddpostComponent,
    PatientFormComponent,
    PatientradioComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
