import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { TimelineComponent } from './modules/blog/components/timeline/timeline.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    children: [
      { path: '', component: TimelineComponent },
      {
        path: 'blog',
        loadChildren: () =>
          import('./modules/blog/blog.module').then((m) => m.BlogModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
