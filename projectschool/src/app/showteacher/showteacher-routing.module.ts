import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowteacherPage } from './showteacher.page';

const routes: Routes = [
  {
    path: '',
    component: ShowteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowteacherPageRoutingModule {}
