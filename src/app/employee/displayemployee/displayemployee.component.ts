import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.scss']
})
export class DisplayemployeeComponent implements OnInit {
  form:any
  resdata:any
  newsdata:any

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      body: new FormControl('')
    })
    this.employeeservice.getdata2()
    .subscribe(data=>{console.log(data)
      this.resdata=data
     this.newsdata = this.resdata.getall
    })
  }

  addblog(){
    console.log(this.form.value);

  this.employeeservice.bloginsert(this.form.value).subscribe((res)=>{
    console.log(res);
  })  
  }

}
