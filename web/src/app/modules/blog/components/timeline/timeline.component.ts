import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  constructor(private blogService: DataService) {}
  items: any;
  ngOnInit() {
    this.blogService.getAllBlogs().subscribe((x) => {
      this.items = x;
    });
  }
}
