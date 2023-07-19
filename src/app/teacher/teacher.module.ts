import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';



@NgModule({
  declarations: [
    DeleteComponent,
    ViewComponent,
    DisplayComponent,
    EditComponent,
    InsertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
