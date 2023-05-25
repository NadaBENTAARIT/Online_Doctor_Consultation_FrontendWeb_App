import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  score=0;
  resultat1=false;
  resultat2=false;
  resultat3=false;
  questions=["Avez-vous régulièrement une forte fièvre?",
  "Toussez-vous souvent?", "Êtes-vous souvent essoufflé","Avez-vous souvent des battements cardiaques accélérés?",
  "Ressentez-vous parfois des douleurs dans le dos. surtout en respirant",
  "Vous sentez-vous souvent fatigué ou faible sans raison apparente?",
  "Souffrez-vous souvent de maux de tête?","Avez-vous déjà eu un accident vasculaire cérébral?",
  "Avez-vous déjà eu des problèmes de vision?","Vomissez-vous parfois après avoir mal à la tête?",
  "Avez-vous parfois des difficultés à marcher ou à parler?","Vous tombez parfois inconscient sans raison apparente?",
  "Avez-vous déjà eu des douleurs mammaires?","avez-vous déjà vérifié la présence de grumeaux dans vos seins?",
  "Avez-vous eu une rougeur ou un gonflement des seins?","Avez-vous déjà subi une blessure au sein?",
  "Avez-vous déjà subi une mammographie?","Avez-vous été diagnostiquée avec un cancer du sein",
  "Avez-vous déjà eu des implants mammaires?"
  ];
  reponses: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(f){
    console.log("hello");
    this.score=0;
  this.resultat1=false;
  this.resultat2=false;
  this.resultat3=false;
  
    let i=0;
     for(i=0;i<this.reponses.length;i++){
       console.log(this.reponses[i]);
       this.score=this.score+Number(this.reponses[i])} 
    
    if(0<=this.score && this.score<=5){
      this.resultat1=true;}
    else if(this.score<=10 && this.score<5){
      this.resultat2=true;
    }
    else{
      this.resultat3=true;
    
    
    }
}}

