import { Component } from '@angular/core';
import { DetailViewService } from './detail-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public detailData: DetailViewService){}

  
  
  
  title = 'MovieDb';
}
