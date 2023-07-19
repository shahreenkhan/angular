import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
data:any
  constructor(private S:StudentService) { }

  ngOnInit(): void {
    this.S.getdata().subscribe((res)=>{
     // console.log(res)
     this.data=res
    })
  }

}
