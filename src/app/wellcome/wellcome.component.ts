import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent {

  

  constructor(public detailData: DetailViewService, public data: GetDataService){
    
  }
  
  
  searchList(searchInput: string){
    this.data.getInfo(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=de-DE&page=1&region=de&page=1`, 'searchData');
    this.detailData.section = '2';
    
  }
}
