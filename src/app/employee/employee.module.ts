import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DisplayemployeeComponent } from './displayemployee/displayemployee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddemployeeComponent,
    DeleteemployeeComponent,
    EditemployeeComponent,
    DisplayemployeeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports:[
    DisplayemployeeComponent
  ]
})
export class EmployeeModule { }
