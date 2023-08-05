import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],

})
export class SearchBarComponent {
  
  constructor(private scroller: ViewportScroller,public detailData: DetailViewService){}
  
  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }
  back(){
    this.detailData.movieData = '';
    this.detailData.movieCreditData = '';
    this.detailData.showData = '';
    this.detailData.showCreditData = '';
    this.detailData.detailData = '';
    this.detailData.section = '0';
  }
}
