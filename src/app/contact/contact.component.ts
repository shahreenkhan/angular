import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
name:any
stu:any
data:any
  constructor(private n:TeamService) { }

  ngOnInit(): void {
    this.data=this.n.stu
  }

}
