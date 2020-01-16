import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpencoursePageRoutingModule } from './opencourse-routing.module';

import { OpencoursePage } from './opencourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpencoursePageRoutingModule
  ],
  declarations: [OpencoursePage]
})
export class OpencoursePageModule {}
