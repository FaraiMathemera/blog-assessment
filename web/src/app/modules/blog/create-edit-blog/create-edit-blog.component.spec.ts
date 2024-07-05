import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBlogComponent } from './create-edit-blog.component';

describe('CreateEditBlogComponent', () => {
  let component: CreateEditBlogComponent;
  let fixture: ComponentFixture<CreateEditBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
