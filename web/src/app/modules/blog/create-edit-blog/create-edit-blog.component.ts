import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-create-edit-blog',
  templateUrl: './create-edit-blog.component.html',
  styleUrl: './create-edit-blog.component.scss',
})
export class CreateEditBlogComponent implements OnInit {
  id: number;
  loaded: boolean = false;
  blog: any = {
    title: '',
    body: '',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: DataService
  ) {
    this.id = +this.route.snapshot.params['post_id'];
  }

  ngOnInit() {
    if (!this.id) {
      this.blog = {
        title: '',
        body: '',
      };
      this.loaded = true;
    } else {
      this.blogService.getBlog(this.id).subscribe((x) => {
        this.blog = {
          title: x.title,
          body: x.body,
        };
      });
      this.loaded = true;
    }
  }

  onSubmit() {
    if (this.id) {
      this.blogService.updateBlog(this.id, this.blog).subscribe((x) => {});
    } else {
      this.blogService.createBlog(this.blog).subscribe((x) => {});
    }

    this.router.navigate(['/blog/posts']);
  }

  onBack() {
    this.router.navigate(['/blog/posts']);
  }
}
