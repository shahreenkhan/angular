import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.scss']
})
export class NewsapiComponent implements OnInit {
data:any
data1:any
  constructor(private b:ApiService) { }

  ngOnInit(): void {
    this.b.newsapi().subscribe((res)=>{
      // console.log(res)
      this.data=res
      this.data1=this.data.articles
      console.log(this.data1)
    })
  }

}
