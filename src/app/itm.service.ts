import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItmService {

  students:any[]=[
  
    {id:1,name:'shahreen',age:25,email:'shareenkhan04@gmail.com'},
    {id:2,name:'vikas',age:33,email:'vikas@gmail.com'},
    {id:3,name:'ashi',age:32,email:'ashi@gmail.com'},
    {id:4,name:'khan',age:24,email:'khan@gmail.com'},
    {id:5,name:'arushi',age:44,email:'hello@gmail.com'}
  ]

  constructor() { }
}
