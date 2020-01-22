import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatelistnamestudentPageRoutingModule } from './updatelistnamestudent-routing.module';

import { UpdatelistnamestudentPage } from './updatelistnamestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatelistnamestudentPageRoutingModule
  ],
  declarations: [UpdatelistnamestudentPage]
})
export class UpdatelistnamestudentPageModule {}
