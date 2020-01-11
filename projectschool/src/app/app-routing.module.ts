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
    path: 'addcourse',
    loadChildren: () => import('./addcourse/addcourse.module').then( m => m.AddcoursePageModule)
  },
{
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
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
  },  {
    path: 'showcourse',
    loadChildren: () => import('./showcourse/showcourse.module').then( m => m.ShowcoursePageModule)
  },
  {
    path: 'updatecourse',
    loadChildren: () => import('./updatecourse/updatecourse.module').then( m => m.UpdatecoursePageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
