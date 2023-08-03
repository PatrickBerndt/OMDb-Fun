import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { environment } from '../environment';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent {
  listOfUpcoming: any;

  constructor(public detailData: DetailViewService){
    this.getInfo();
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
    await fetch('https://api.themoviedb.org/3/movie/upcoming?language=de-DE&page=1&region=de', this.options)
    .then(response => response.json())
    .then(response => this.listOfUpcoming = response)
    .catch(err => console.error(err));
  }

  toggleDetail(id:number){
    this.detailData.detailData = id;
    this.getDetailData(id);
  
  }

  async getDetailData(id:any){
    await fetch(`https://api.themoviedb.org/3/movie/${id}?language=de-DE`, this.options)
    .then(response => response.json())
    .then(response => this.detailData.movieData = response)
    .catch(err => console.error(err));
  }
}
