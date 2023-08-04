import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],

})
export class SearchBarComponent {
  
  constructor(private scroller: ViewportScroller){}
  
  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }
}
