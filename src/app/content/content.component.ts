import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  listOfMovies: any;
  

  constructor(){
    this.getInfo();
  }

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ api_token
    }
  };
 

  async getInfo(){
    await fetch('https://api.themoviedb.org/3/movie/popular?language=de', this.options)
    .then(response => response.json())
    .then(response => this.listOfMovies = response)
    .catch(err => console.error(err));
  }
  
  

}
