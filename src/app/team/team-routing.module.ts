import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeameditComponent } from './teamedit/teamedit.component';




const routes: Routes = [
{
  path:"",
  component:DisplayComponent
},
{
  path:"team-view/:id",
  component:TeamViewComponent
},
{
  path:"teamedit/:id",
  component:TeameditComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
