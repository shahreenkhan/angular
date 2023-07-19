import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeameditComponent } from './teamedit/teamedit.component';


@NgModule({
  declarations: [
    DisplayComponent,
    TeamViewComponent,
    TeameditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TeamRoutingModule
  ],
  exports:[DisplayComponent]
})
export class TeamModule { }
