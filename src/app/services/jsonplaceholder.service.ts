import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../support/User';
import { map, catchError } from 'rxjs/operators';
import { Album } from '../support/Album';
import { Post } from '../support/Post';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private httpclient: HttpClient, private router: Router) { }

  getUser(userId: number): Observable<User> {
    return this.httpclient.get<User>(`${this.apiUrl}users/${userId}`).
    pipe(catchError(this.handleError<User>(`getUser id=${userId}`)));
  }

  getUserAlbums(userId: number): Observable<Album[]>{
    return this.httpclient.get(`${this.apiUrl}users/${userId}/albums`).pipe(map((data: Album[])=>{
      return data;
    }));
  }

  getUserPosts(userId: number): Observable<Post[]>{
    return this.httpclient.get(`${this.apiUrl}users/${userId}/posts`).pipe(map((data: Post[])=>{
      return data;
    }));
  }
  


  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      if(error.status === 404){
        this.router.navigateByUrl('/404')
      }
      return of(result as T);
    };
  }

}
