import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 notifs: any=[];
  constructor(private api: ServicesService) {
    
   this.getNoty()
    
  }

  getNoty(){
    return this.api.getNotifs().subscribe(data => {
      console.log("API DATA:", data);
      this.notifs = data;
    })
    }

  
}
