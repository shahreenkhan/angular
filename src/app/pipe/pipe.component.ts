import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  title = 'firstpart';

  myname:string='how to develop'
  mydate=new Date(1993,10,15); //date 0,jan,1 feb
  mynumber:number=67.44;  //decimal number
  mycurrency:number=6744;  //currency number


  mydata:any[]=[
    {id:1,name:'shareen',city:'gwalior'},
    {id:2,name:'vikas',city:'jaipur'},
    {id:3,name:'rahul',city:'bengluru'},
    {id:4,name:'ashu',city:'bhopal'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
