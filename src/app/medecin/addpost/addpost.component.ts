import { Component, OnInit } from '@angular/core';
import {Blog} from  'src/models/Blog';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {
  post = new Blog("","","","","","");
  urlInsererPost="http://localhost:8080/savePost"
  constructor(private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(f){
    let input;
    input=JSON.stringify({ titre: this.post.titre,pcontenu: this.post.contenu });
    //appeler le back
    this.httpClient
      .post(this.urlInsererPost, input)
      .subscribe(
        (res) => {
          console.log('Appel reussi !');
          if(res['success']==true){
            this.router.navigate(['blogs']);

          }
          else{  
            console.log('Erreur dinsertion' );
            

          }
        },
        (error) => {
          console.log('Erreur:Connexion non etablie au serveur! : ' + error);
          
        }
      );
  }

  }


