import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpencoursePage } from './opencourse.page';

const routes: Routes = [
  {
    path: '',
    component: OpencoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpencoursePageRoutingModule {}
