import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListnamestudentPage } from './listnamestudent.page';

const routes: Routes = [
  {
    path: '',
    component: ListnamestudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListnamestudentPageRoutingModule {}
