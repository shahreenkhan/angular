import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

import { StyleBindingComponent } from './style-binding/style-binding.component';
import { InterpolationBindingComponent } from './interpolation_binding/interpolation-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AttributeBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports:[InterpolationBindingComponent,PropertyBindingComponent,ClassBindingComponent,StyleBindingComponent,AttributeBindingComponent,EventBindingComponent,TwoWayBindingComponent]
  
})
export class DatabindingModule { }

