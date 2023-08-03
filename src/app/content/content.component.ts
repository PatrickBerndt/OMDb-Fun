import { Component } from '@angular/core';
import { DetailViewService } from '../detail-view.service';
import { environment } from '../environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  
  api_token:string = environment.apiToken;
  
  constructor(private detailData: DetailViewService){
  }

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  `Bearer ${this.api_token}`
    }
  };
 
  

}
