import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';





const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = "http://localhost:3500/posts/";
  constructor(private http : HttpClient) { }

  async getAllPosts() : Promise<any> {
    const data = fetch(this.url);
    return (await data).json() ?? [];
  }

  setPost(post: Post): Observable<any> {
    return this.http.post(this.url, post).pipe(catchError(this.handleError));
    
  }

  deletePost(postId : number | undefined) : any{
    const url = `${this.url}${postId}`;
    return this.http.delete(url, httpOptions).subscribe(e=>{
      
    });;
  }

  private handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
      // Server-side error
      errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
    } else {
      // Client-side error
      errorMessage = `Client Error: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
} 
