import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListFormComponent } from './post-list-form.component';

describe('PostListFormComponent', () => {
  let component: PostListFormComponent;
  let fixture: ComponentFixture<PostListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
