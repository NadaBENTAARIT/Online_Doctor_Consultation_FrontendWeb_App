import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin-acceuil',
  templateUrl: './medecin-acceuil.component.html',
  styleUrls: ['./medecin-acceuil.component.scss']
})
export class MedecinAcceuilComponent implements OnInit {


  headers=["ID","Nom", "Prénom","Date de naissance","Numéro de téléphone"];
  patients = [
    {"ID":"1",Nom: "Mark", Prénom: 'Otto',"Date de naissance":"02/11/1996","Numéro de téléphone":"23459780"},
    {"ID":"2",Nom: "Mark", Prénom: 'Otto',"Date de naissance":"02/11/1996","Numéro de téléphone":"23459780"},
    {"ID":"3",Nom: "Mark", Prénom: 'Otto',"Date de naissance":"02/11/1996","Numéro de téléphone":"23459780"},
    {"ID":"4",Nom: "Mark", Prénom: 'Otto',"Date de naissance":"02/11/1996","Numéro de téléphone":"23459780"},
    {"ID":"5",Nom: "Mark", Prénom: 'Otto',"Date de naissance":"02/11/1996","Numéro de téléphone":"23459780"},
    {"ID":"6",Nom: "Mark", Prénom: 'Otto',"Date de naissance":"02/11/1996","Numéro de téléphone":"23459780"},
   
    
];
  constructor() { }

  ngOnInit(): void {
  }
  consulterDossier(ch:string){
    alert("cliqué"+ch);
  }
}
