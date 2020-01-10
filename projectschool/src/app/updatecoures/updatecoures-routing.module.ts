import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecouresPage } from './updatecoures.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecouresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecouresPageRoutingModule {}
