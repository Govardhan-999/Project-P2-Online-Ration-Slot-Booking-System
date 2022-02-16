import { Component, OnInit } from '@angular/core';
import { DsassignService } from './dsassign.service';

@Component({
  selector: 'app-dealertoshop',
  templateUrl: './dealertoshop.component.html',
  styleUrls: ['./dealertoshop.component.css']
})
export class DealertoshopComponent implements OnInit {
  assigning:any=[]
  constructor(private ss:DsassignService) { }

  ngOnInit(): void {
    this.aslist();
  }
  aslist(){
    var result=this.ss.dsdetails().then(response=>response.toPromise());
    result.then(dd=>this.assigning=dd);
  }
  


}
