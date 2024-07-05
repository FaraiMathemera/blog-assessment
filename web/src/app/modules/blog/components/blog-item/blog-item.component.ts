import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss',
})
export class BlogItemComponent implements OnInit {
  @Input() item: any;
  @Input() list: boolean = false;
  ngOnInit() {}
}
