import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-create-edit-blog',
  templateUrl: './create-edit-blog.component.html',
  styleUrl: './create-edit-blog.component.scss',
})
export class CreateEditBlogComponent {
  constructor(private router: Router, private blogService: DataService) {}

  blog = {
    title: '',
    body: '',
  };

  onSubmit() {
    this.blogService.createBlog(this.blog).subscribe((x) => {});
    console.log('Blog post saved:', this.blog);
    // After saving, navigate to another page if needed
    this.router.navigate(['/blog/posts']);
  }

  onBack() {
    this.router.navigate(['/posts']);
  }
}
