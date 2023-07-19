import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { ViewemployeeComponent } from './employee/viewemployee/viewemployee.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'brand',
    component:BrandComponent
  },
  {
    path:'careers',
    component:CareersComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'ourteam',
    component:OurteamComponent
  },
  {
    path:'press-release',
    component:PressReleaseComponent
  },
  {
    path:"view/:id",
    component:ViewComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  },
  {
    path:"view_blog/:id",
    component:ViewemployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
