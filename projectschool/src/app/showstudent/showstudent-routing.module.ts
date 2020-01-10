import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowstudentPage } from './showstudent.page';

const routes: Routes = [
  {
    path: '',
    component: ShowstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowstudentPageRoutingModule {}
