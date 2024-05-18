import { Component, OnInit, inject } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from '../post';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent,
            CommonModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts! : Post[] ;
  postService : PostService = inject(PostService);

  constructor (private router : Router) { }

  ngOnInit() : void {
    this.postService.getAllPosts().then((data) => {
      
       this.posts = data;
    });
  }

  goToPostForm = () =>  {
    this.router.navigate(["postForm"]);
  }
  
}
