import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListnamestudentPageRoutingModule } from './listnamestudent-routing.module';

import { ListnamestudentPage } from './listnamestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListnamestudentPageRoutingModule
  ],
  declarations: [ListnamestudentPage]
})
export class ListnamestudentPageModule {}
