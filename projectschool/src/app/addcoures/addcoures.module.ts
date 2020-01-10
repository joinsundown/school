import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcouresPageRoutingModule } from './addcoures-routing.module';

import { AddcouresPage } from './addcoures.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddcouresPageRoutingModule
  ],
  declarations: [AddcouresPage]
})
export class AddcouresPageModule {}
