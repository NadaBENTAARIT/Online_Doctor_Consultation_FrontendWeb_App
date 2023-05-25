import { Component, OnInit } from '@angular/core';
import {Blog} from  'src/models/Blog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   blogs:Array<Blog>=[];
   urlgetBlogs="http://localhost:8080/getBlogs";
   noBlog=false;
   
  
  constructor(private router: Router,private httpClient: HttpClient) { 
    
  }
  
  ngOnInit(): void {
   // this.getBlogsFromServer();   à faire lors de ;l'integration!!!!!!!!!!!!!!!!!
   //por le moment on utilise ça!!
   this.getBlogs1();
     }
  
  
  getBlogsFromServer() {
    this.httpClient
      .get<any[]>(this.urlgetBlogs)
      .subscribe(
        (response) => {
          this.blogs = response;
          //this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de connexion au serveur! : ' + error);
        }
      );
}
  
  
  
  
 //juste pour le test coté front sans la base de donnéess!!!!!
  getBlogs1(){

    
    console.log(this.blogs.length);
   let b1=new Blog("1","Coronavirus: le Chili","Qui a introduit le coronavirus en France ? Santé publique France et l’Institut Pasteur ont mené l’enquête afin de remonter la chaîne de contamination dans l’Oise (60). Les journalistes du Monde qui ont eu accès aux travaux menés depuis près d’un mois révèlent que si le patient zéro reste introuvable, le département est bien le foyer de l’épidémie dans l’Hexagone. Mais le virus n’a pas été introduit sur la base militaire de Creil, et il l’aurait été dès la mi-janvier.",'01/03/2020','Paul','Bouffard');
   let b2=new Blog("1","Coronavirus : l’enquête sur le patient zéro en France dévoilée","Le journal Le Monde a eu accès à l’enquête épidémiologique de Santé publique France et de l’Institut Pasteur qui tente d’identifier la première personne contaminée par le SARS-CoV-2 sur le territoire. S’il n’est toujours pas connu, on sait néanmoins que le virus a bel et bien été introduit dans l’Oise et qu’il y circulait bien avant les premiers recensements",'01/03/2020','Paul','Bouffard');
   let b3=new Blog("1","Coronavirus: le Chili","xxxxxxx",'01/03/2020','Paul','Bouffard');
    this.blogs.push(b1);
    this.blogs.push(b2);
    this.blogs.push(b3);
    console.log(this.blogs)
    return(this.blogs);
  }

}
