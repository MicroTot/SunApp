import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
item: any;
amount: any;
date: any;
collected: any=[];
  constructor(private api:ServicesService) {}

  doRefresh(event) {
    window.location.reload()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }  

  ngOnInit(){
    this.getData();
    this.getCollected();
  }
 

  getData(){
    return this.api.getExpenditure().subscribe(data => {
      console.log("API DATA:", data);
      this.amount = data;
    })
    }
    getCollected(){
      return this.api.getCollected().subscribe(data => {
        console.log("API DATA:", data);
        this.collected = data;
      })
  
    }

  }

