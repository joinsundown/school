import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowstudentPageRoutingModule } from './showstudent-routing.module';

import { ShowstudentPage } from './showstudent.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ShowstudentPageRoutingModule
  ],
  declarations: [ShowstudentPage]
})
export class ShowstudentPageModule {}
