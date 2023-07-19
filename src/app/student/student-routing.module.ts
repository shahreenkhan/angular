import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudenteditComponent } from './studentedit/studentedit.component';

              

const routes: Routes = [
  {
    path:"",
    component:DisplayComponent
  },
  {
    path:"student-view/:id",
    component:StudentViewComponent
  },
  {
    path:"studentedit/:id",
    component:StudenteditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
