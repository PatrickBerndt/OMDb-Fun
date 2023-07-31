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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWYwYmYwNTdlZGMzODNkZDRlODIyNTgzMDk4ZDIyOCIsInN1YiI6IjY0YzY2YjY1Y2FkYjZiMDEyNTcwMWZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QUnTw5wQ4ZX9rTYlAeVxlAivOPkGsZ7J1cem8wdavQ'
    }
  };

  async getInfo(){
    await fetch('https://api.themoviedb.org/3/movie/upcoming?language=de', this.options)
    .then(response => response.json())
    .then(response => this.listOfMovies = response)
    .catch(err => console.error(err));
  }
  
  

}
