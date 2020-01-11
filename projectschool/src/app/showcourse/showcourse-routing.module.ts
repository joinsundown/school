import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcoursePage } from './showcourse.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcoursePageRoutingModule {}
