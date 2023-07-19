import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
id:any
studentviewdata:any
  constructor(private S:StudentService, private r:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.r.snapshot.paramMap.get('id')
    //console.log(this.id)

    this.S.studentView(this.id).subscribe((res)=>{
      //console.log(res)
      this.studentviewdata=res
      //console.log(this.studentviewdata)
    })
  }

}
