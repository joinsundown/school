import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcouresPage } from './addcoures.page';

const routes: Routes = [
  {
    path: '',
    component: AddcouresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcouresPageRoutingModule {}
