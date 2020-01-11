import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecoursePageRoutingModule } from './updatecourse-routing.module';

import { UpdatecoursePage } from './updatecourse.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    UpdatecoursePageRoutingModule
  ],
  declarations: [UpdatecoursePage]
})
export class UpdatecoursePageModule {}
