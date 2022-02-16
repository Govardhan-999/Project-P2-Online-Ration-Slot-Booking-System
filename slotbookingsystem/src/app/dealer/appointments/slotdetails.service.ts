import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotdetailsService {

  constructor(private http:HttpClient) { }

  async details(){
    return await this.http.get("http://localhost:10012/showMyAppoitments")
  } 


}
