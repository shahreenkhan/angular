import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
data:any
data1:any
  constructor(private b: ApiService) { }

  ngOnInit(): void {
    this.b.alldata().subscribe((res)=>{
    //subscribe function helps to show data in result
      // console.log(res)
      this.data=res
      console.log(this.data)
    })
  }

}
