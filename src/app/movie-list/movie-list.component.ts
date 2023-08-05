import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { environment } from '../environment';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  constructor(public detailData: DetailViewService, public data: GetDataService){
    this.data.getInfo('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=de-DE&page=1&region=de&sort_by=popularity.desc', 'movie');
  }

  toggleDetail(id:number){
    this.detailData.detailData = id;
    this.data.getInfo(`https://api.themoviedb.org/3/movie/${id}?language=de-DE`, 'movieDetail');
    this.data.getInfo(`https://api.themoviedb.org/3/movie/${id}/credits?language=de-DE`, 'movieCredit');
    this.detailData.section = '1';
  }

}
