import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailViewService {
  detailData:any = '';
  movieData:any = '';
  showData:any = '';
  movieCreditData:any = '';
  showCreditData:any = '';

  constructor() { }

  formatDate(data:string){
      const months = [
        "Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
        "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
      ];
    
      let parts = data.split("-");
      let year = parts[0];
      let monthIndex = parseInt(parts[1]) - 1;
      let day = parts[2];
    
      let formatedDate = `${day}. ${months[monthIndex]} ${year}`;
      return formatedDate;
  }
    
 
}
