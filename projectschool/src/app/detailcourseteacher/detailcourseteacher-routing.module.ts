import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailcourseteacherPage } from './detailcourseteacher.page';

const routes: Routes = [
  {
    path: '',
    component: DetailcourseteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailcourseteacherPageRoutingModule {}
