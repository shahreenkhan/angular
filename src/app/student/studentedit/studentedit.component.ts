import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.scss']
})
export class StudenteditComponent implements OnInit {
id:any
form:any
editdata:any
  constructor( private S:StudentService, private a:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id=this.a.snapshot.paramMap.get('id')
    console.log(this.id)
   this.S.studentView(this.id).subscribe((res)=>{
    //console.log(res)

    // edit form me data show krne ke liye
    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl()
     })
     this.editdata = res
     this.form.patchValue({
      title: this.editdata.title,
      body: this.editdata.body
     })
   })
  
  }
  update(){
    this.S.updateStudent(this.form.value,this.id).subscribe(res=>{
      console.log(res);
      
    })
  }
}
