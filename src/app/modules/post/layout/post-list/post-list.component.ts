
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostListFormComponent } from '../../components/post-list-form/post-list-form.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    PostListFormComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Post 1', content: 'Content for Post 1' },
    { id: 2, title: 'Post 2', content: 'Content for Post 2' },
    { id: 3, title: 'Post 3', content: 'Content for Post 3' },
    // Agrega más posts según sea necesario
  ];
}
