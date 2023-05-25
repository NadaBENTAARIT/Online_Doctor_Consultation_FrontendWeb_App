import { Component, OnInit,Input } from '@angular/core';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
   
  user = new User("","","","","","");
  erreur:boolean=false;
  authentificationURl="http://localhost:8080/login";
   
  constructor(private router: Router,private connexionService : ConnexionService,private httpClient: HttpClient) { }
  
 

  ngOnInit(): void {
  }

  onSubmit(f){
      
   //preparer l'input du service
    let input;
    input=JSON.stringify({ mail: this.user.mail,password: this.user.password, status: this.user.role });
    //appeler le back
    this.httpClient
      .post(this.authentificationURl, input)
      .subscribe(
        (res) => {
          console.log('Appel reussi !');
          if(res['success']==true){
            this.router.navigate(['acceuilPatient']);

          }
          else{  
            console.log('Erreur authentification !!!' );
            this.erreur=true;

          }
        },
        (error) => {
          console.log('Erreur:Connexion non etablie au serveur! : ' + error);
          
        }
      );
  }
}

