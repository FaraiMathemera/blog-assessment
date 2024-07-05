import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrl: './list-blog.component.scss',
})
export class ListBlogComponent {
  constructor(private blogService: DataService) {}
  items: any;
  id: number = 1;
  ngOnInit() {
    this.blogService.getMyBlogs(this.id).subscribe((x) => {
      this.items = x;
    });
  }
}
