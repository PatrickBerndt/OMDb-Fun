import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { environment } from '../environment';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent {

  constructor(public detailData: DetailViewService, public data: GetDataService){
    this.data.getInfo('https://api.themoviedb.org/3/trending/tv/week?language=de-DE', 'show');
  }
  
  toggleDetail(id:number){
    this.detailData.detailData = id;
    this.data.getInfo(`https://api.themoviedb.org/3/tv/${id}?language=de-DE`, 'showDetail');
    this.data.getInfo(`https://api.themoviedb.org/3/tv/${id}/credits?language=de`, 'showCredit');
    this.detailData.section = '1';
  }

}
