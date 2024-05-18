import { Component, Input, inject } from '@angular/core';
import { Post } from '../post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';




@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
            FormsModule,
            CommonModule,
            
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})

export class PostFormComponent {
  
  newPost : Post;
  error :boolean = false;
  errorMessage : string = "";
  postService : PostService = inject(PostService);

  @Input() title ='';
  @Input() content='';


  constructor(private router: Router) {
      this.newPost = {
        title : "",
        content : ""
      };
    }



  handlSubmit() {
    if(this.title === '') {
      this.errorMessage= "entrer un titre";
      this.error= true;
      setTimeout(() => this.error = false, 4000);
      return;
    }
    if(this.content === '') {
      this.errorMessage= "entrer un message";
      this.error= true;
      setTimeout(() => this.error = false, 4000);
      return;
    }
    
    this.newPost.title = this.title;
    this.newPost.content = this.content;
    this.addPost();
    
  }

  addPost() {
    this.postService.setPost(this.newPost).subscribe(response => {
      console.log('Post created:', response);
      this.goToPostList();
      
    });
    }

  goToPostList= () =>  {
    this.router.navigate(['']);
  }

  

}
