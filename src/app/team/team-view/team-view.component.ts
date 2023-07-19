import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {
id:any
teamviewdata:any
  constructor(private t:TeamService, private r:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.r.snapshot.paramMap.get('id')  //snapshot 
    //console.log(this.id)

    this.t.teamView(this.id).subscribe((res)=>{
      console.log(res)
      this.teamviewdata=res
      console.log(this.teamviewdata)

    })
  }

}
