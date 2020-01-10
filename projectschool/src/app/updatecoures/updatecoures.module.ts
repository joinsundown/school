import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecouresPageRoutingModule } from './updatecoures-routing.module';

import { UpdatecouresPage } from './updatecoures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecouresPageRoutingModule
  ],
  declarations: [UpdatecouresPage]
})
export class UpdatecouresPageModule {}
