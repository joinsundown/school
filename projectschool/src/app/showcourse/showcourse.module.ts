import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcoursePageRoutingModule } from './showcourse-routing.module';

import { ShowcoursePage } from './showcourse.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ShowcoursePageRoutingModule
  ],
  declarations: [ShowcoursePage]
})
export class ShowcoursePageModule {}
