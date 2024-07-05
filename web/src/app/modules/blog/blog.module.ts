import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateEditBlogComponent } from './create-edit-blog/create-edit-blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { MatCardModule } from '@angular/material/card';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    CreateEditBlogComponent,
    ListBlogComponent,
    ViewBlogComponent,
    BlogItemComponent,
    TimelineComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class BlogModule {}
