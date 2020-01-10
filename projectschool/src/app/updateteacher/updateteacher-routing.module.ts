import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateteacherPage } from './updateteacher.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateteacherPageRoutingModule {}
