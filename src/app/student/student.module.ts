import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayComponent,
    StudentViewComponent,
    StudenteditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ],
  exports:[DisplayComponent]
})
export class StudentModule { }
