import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teamedit',
  templateUrl: './teamedit.component.html',
  styleUrls: ['./teamedit.component.scss']
})
export class TeameditComponent implements OnInit {
id:any
  constructor(private t:TeamService, private a:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.a.snapshot.paramMap.get('id')
    console.log(this.id)
    this.t.teamView(this.id).subscribe((res)=>{
      console.log(res)
    })
  }

}
