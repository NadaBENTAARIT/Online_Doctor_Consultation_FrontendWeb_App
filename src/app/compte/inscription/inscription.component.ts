import { Component, OnInit,Input } from '@angular/core';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  user = new User("","","","","","");
  inscri=false;
  existedeja=false;
  attribumanquant=false;
  inscriptionURl="http://localhost:8080/signup";

  constructor(private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(f){
      
    //preparer l'input du service
     let input;
     input=JSON.stringify({ "mail": this.user.mail,"password": this.user.password, "status": this.user.role ,"phone":this.user.tel,"speciality":this.user.specialite});
     //appeler le back
     this.httpClient
       .post(this.inscriptionURl, input)
       .subscribe(
         (res) => {
           console.log('Appel reussi !');
           if(res=="user created"){
             this.inscri=true;
 
           }
           else if(res=="user already exists")
           {this.existedeja=true;}
           else if(res=="missing fields"){
             this.attribumanquant=true;
           }
           
         },
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
         }
       );
   }
 }
