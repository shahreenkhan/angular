import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i am parent';

  students:any[]=[
  
    {id:1,name:'shareen',age:25,email:'shareenkhan04@gmail.com'},
    {id:2,name:'vikas',age:33,email:'vikas@gmail.com'},
    {id:3,name:'ashi',age:32,email:'ashi@gmail.com'},
    {id:6,name:'khan',age:24,email:'khan@gmail.com'},
    {id:5,name:'arushi',age:44,email:'hello@gmail.com'}
  ]

}
