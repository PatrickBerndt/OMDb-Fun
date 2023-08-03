import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { environment } from '../environment';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent {

  listOfTvShows: any;
  api_token:string = environment.apiToken;

  constructor(public detailData: DetailViewService){
    
    this.getInfoTv();
  }

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  `Bearer ${this.api_token}`
    }
  };
  
  async getInfoTv(){
    await fetch('https://api.themoviedb.org/3/trending/tv/week?language=de-DE', this.options)
    .then(response => response.json())
    .then(response => this.listOfTvShows = response)
    .catch(err => console.error(err));
  }

  toggleDetail(id:number){
    this.detailData.detailData = id;
    this.getDetailData(id);
  
  }

  async getDetailData(id:any){
    await fetch(`https://api.themoviedb.org/3/tv/${id}?language=de-DE`, this.options)
    .then(response => response.json())
    .then(response => this.detailData.showData = response)
    .catch(err => console.error(err));
  }
  
}
