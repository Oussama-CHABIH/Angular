import { PostListComponent } from './../post-list/post-list.component';
import { Component, Input} from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() post : Post | undefined;
  @Input() index : number | undefined;

  constructor(private postService : PostService, private postList : PostListComponent) {};

  handlDelete(id : number | undefined) {
    this.postService.deletePost(id);
    this.postList.ngOnInit();
  }


}
