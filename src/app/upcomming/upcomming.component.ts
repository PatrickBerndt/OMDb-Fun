import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.scss']
})
export class UpcommingComponent {
 

  constructor(public detailData: DetailViewService, public data: GetDataService){
    this.data.getInfo('https://api.themoviedb.org/3/movie/upcoming?language=de-DE&page=1&region=de', 'upcoming');
  }

  toggleDetail(id:number){
    this.detailData.detailData = id;
    this.data.getInfo(`https://api.themoviedb.org/3/movie/${id}?language=de-DE`, 'movieDetail');
  }
  
}
