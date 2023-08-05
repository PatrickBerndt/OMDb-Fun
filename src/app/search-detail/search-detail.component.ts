import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent {

  constructor(public detailData: DetailViewService, public data: GetDataService){}

  toggleDetail(id:number){
    this.detailData.detailData = id;
    this.data.getInfo(`https://api.themoviedb.org/3/movie/${id}?language=de-DE`, 'movieDetail');
    this.data.getInfo(`https://api.themoviedb.org/3/movie/${id}/credits?language=de-DE`, 'movieCredit');
    this.detailData.section = '1';
  }
  backToSearch(){
    this.detailData.movieData = '';
    this.detailData.movieCreditData = '';
    this.detailData.showData = '';
    this.detailData.showCreditData = '';
    this.detailData.detailData = '';
    this.detailData.searchData = '';
    this.detailData.section = '0';
  }
}
