import { Component, OnInit } from '@angular/core';
import { ItmService } from '../itm.service';
// import { FirstfiddleService } from '../firstfiddle.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
name:any
student:any
data:any
  // constructor(private f:FirstfiddleService) { }
  constructor(private d:ItmService){}

  ngOnInit(): void {
   this.data=this.d.students 
  
  }

}
