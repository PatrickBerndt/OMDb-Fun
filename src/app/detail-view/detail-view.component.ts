import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent{

  constructor(public detailData: DetailViewService){
    
  }
  back(){
    this.detailData.movieData = '';
    this.detailData.showData = '';
    this.detailData.detailData = '';

  }
}
