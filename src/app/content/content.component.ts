import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { environment } from '../environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  listOfMovies: any;
  listOfTvShows: any;
  

  constructor(private detailData: DetailViewService){
    this.getInfo();
    this.getInfoTv();
  }
  
  api_token:string = environment.apiToken;

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  `Bearer ${this.api_token}`
    }
  };
 

  async getInfo(){
    await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=de-DE&page=1&region=de&sort_by=popularity.desc', this.options)
    .then(response => response.json())
    .then(response => this.listOfMovies = response)
    .catch(err => console.error(err));
  }

  async getInfoTv(){
    await fetch('https://api.themoviedb.org/3/trending/tv/week?language=de-DE', this.options)
    .then(response => response.json())
    .then(response => this.listOfTvShows = response)
    .catch(err => console.error(err));
  }
  
  toggleDetail(id:number){
    this.detailData.detailData = id;
    console.log('content ',this.detailData.detailData);
    this.getDetailData(id);
  
  }

  async getDetailData(id:any){
    await fetch(`https://api.themoviedb.org/3/movie/${id}?language=de-DE`, this.options)
    .then(response => response.json())
    .then(response => this.detailData.movieData = response)
    .catch(err => console.error(err));
  }

}
