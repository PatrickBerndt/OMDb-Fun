import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor( public data: GetDataService){}

  toggleImpressum(){
    this.data.impressumOpen = !this.data.impressumOpen
  }
}
