import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatabindingModule } from './databinding/databinding.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { TeamModule } from './team/team.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrandComponent,
    OurteamComponent,
    ContactComponent,
    CareersComponent,
    PressReleaseComponent,
    CarouselComponent,
    PagenotfoundComponent,
    ViewComponent,
    EditComponent,
    IfComponent,
    ForComponent,
    SwitchComponent,
    ChildComponent,
    PipeComponent,
    ApiComponent,
    NewsapiComponent,
   
  ],
  imports: [
    BrowserModule,
    DatabindingModule,
    HttpClientModule,
    EmployeeModule,
    StudentModule,
    //TeamModule,
    AppRoutingModule
    
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
