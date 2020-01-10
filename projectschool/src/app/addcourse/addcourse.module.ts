import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcoursePageRoutingModule } from './addcourse-routing.module';

import { AddcoursePage } from './addcourse.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddcoursePageRoutingModule
  ],
  declarations: [AddcoursePage]
})
export class AddcoursePageModule {}
