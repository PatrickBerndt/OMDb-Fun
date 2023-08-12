import { Injectable } from '@angular/core';
import { environment } from './environment';
import { DetailViewService } from './detail-view.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(public detailData: DetailViewService) { }

  listOfUpcoming: any;
  listOfMovies: any;
  listOfShows: any;

  impressumOpen: boolean = false;


  api_token:string = environment.apiToken;

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  `Bearer ${this.api_token}`
    }
  };

  async getInfo(url:string ,toList:string ){
    await fetch(url, this.options)
    .then(response => response.json())
    .then(response => this.checkList(toList, response))
    .catch(err => console.error(err));
  }

  checkList(toList:string, response:any){
    if(toList == 'upcoming'){
      this.listOfUpcoming = response;
    }else if(toList == 'movie'){
      this.listOfMovies = response;
    }else if(toList == 'show'){
      this.listOfShows = response;
    }else if(toList == 'showDetail'){
      this.detailData.showData = response;
    }else if(toList == 'movieDetail'){
      this.detailData.movieData = response;
    }else if(toList == 'movieCredit'){
      this.detailData.movieCreditData = response;
    }else if(toList == 'showCredit'){
      this.detailData.showCreditData = response;
    }else if(toList == 'searchData'){
      this.detailData.searchData = response;
    }
  }
}
