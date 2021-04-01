import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  conts: any=[];
  constructor(private api: ServicesService) {
   this.getCont()
  }

  getCont(){
    return this.api.getMembers().subscribe(data => {
      console.log("API DATA:", data);
      this.conts = data;
    })
  }

 
}
