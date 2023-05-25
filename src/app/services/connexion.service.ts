
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
 
  authentificationURl="/////";
  mail="";
  password=""
  role=""

  constructor(private httpClient: HttpClient) { }
  
  sauthetifier(){
    //preparer l'input du service
    let input;
    input=JSON.stringify({ mail: this.mail,password: this.password, role: this.role });
    //appeler le back
    this.httpClient
      .post(this.authentificationURl, input)
      .subscribe(
        () => {
          console.log('Appel reussi !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

}
