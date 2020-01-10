import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addcoures',
    loadChildren: () => import('./addcoures/addcoures.module').then( m => m.AddcouresPageModule)
  },
{
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'showteacher',
    loadChildren: () => import('./showteacher/showteacher.module').then( m => m.ShowteacherPageModule)
  },
  {
    path: 'showstudent',
    loadChildren: () => import('./showstudent/showstudent.module').then( m => m.ShowstudentPageModule)
  },
  {
    path: 'updateteacher',
    loadChildren: () => import('./updateteacher/updateteacher.module').then( m => m.UpdateteacherPageModule)
  },
  {
    path: 'updatestudent',
    loadChildren: () => import('./updatestudent/updatestudent.module').then( m => m.UpdatestudentPageModule)
  },
  {
    path: 'updatecoures',
    loadChildren: () => import('./updatecoures/updatecoures.module').then( m => m.UpdatecouresPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
