import { Routes } from '@angular/router';
import { PostListComponent } from './modules/post/layout/post-list/post-list.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: '**', component: NotFoundComponent } // Ruta para páginas no encontradas

];
