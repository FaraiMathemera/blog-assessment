import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditBlogComponent } from './create-edit-blog/create-edit-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';

const routes: Routes = [
  { path: '', component: ListBlogComponent },
  { path: 'new', component: CreateEditBlogComponent },
  { path: 'posts', component: ListBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
