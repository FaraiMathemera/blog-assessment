import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss',
})
export class BlogItemComponent implements OnInit {
  constructor(private router: Router, private blogService: DataService) {}
  @Input() item: any;
  @Input() list: boolean = false;
  ngOnInit() {}
  delete(id: number) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.blogService.deleteBlog(id).subscribe((x) => {});
    }
  }
  edit(id: number) {
    this.router.navigate(['/blog/edit/', id]);
  }
}
