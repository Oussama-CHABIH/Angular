import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

export const routes: Routes = [
    {path : "", component : PostListComponent}, 
    {path : "postForm", component : PostFormComponent}
];
