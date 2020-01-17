import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailcourseteacherPageRoutingModule } from './detailcourseteacher-routing.module';

import { DetailcourseteacherPage } from './detailcourseteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailcourseteacherPageRoutingModule
  ],
  declarations: [DetailcourseteacherPage]
})
export class DetailcourseteacherPageModule {}
