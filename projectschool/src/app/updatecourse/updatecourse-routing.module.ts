import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecoursePage } from './updatecourse.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecoursePageRoutingModule {}
