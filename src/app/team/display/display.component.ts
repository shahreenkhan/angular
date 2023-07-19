import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
data:any
  constructor(private T:TeamService) { }

  ngOnInit(): void {
    this.T.getdata().subscribe((res)=>{
      //console.log(res)
      this.data=res
    })
  }

}
