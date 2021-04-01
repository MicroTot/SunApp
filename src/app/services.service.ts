import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint1 = "http://127.0.0.1:8000/api/v1/contribution";
const endpoint2 = "http://127.0.0.1:8000/api/v1/expenditure";
const endpoint3 = "http://127.0.0.1:8000/api/v1/members";
const endpoint4 = "http://127.0.0.1:8000/api/v1/collected";
const endpoint5 = "http://127.0.0.1:8000/api/v1/notifs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService  {

  constructor(private http:HttpClient) { }

  public getContribution(){
    return this.http.get(endpoint1);
  }

  public getExpenditure(){
    return this.http.get(endpoint2);
  }
 
  public getMembers(){
    return this.http.get(endpoint3);
  }

  public getCollected(){
    return this.http.get(endpoint4);
  }

  public getNotifs(){
    return this.http.get(endpoint5);
  }
}
