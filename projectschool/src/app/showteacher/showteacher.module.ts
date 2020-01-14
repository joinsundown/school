import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowteacherPageRoutingModule } from './showteacher-routing.module';

import { ShowteacherPage } from './showteacher.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    ShowteacherPageRoutingModule
  ],
  declarations: [ShowteacherPage]
})
export class ShowteacherPageModule {}
