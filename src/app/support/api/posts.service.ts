import { Injectable } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  constructor(private apiService: JsonplaceholderService) { }

  getUserPosts(userId:number):Observable<Post[]> {
    return this.apiService.getUserPosts(userId);
  }
  newPost(postDto:Post):Observable<Post>{
    return this.apiService.newPost(postDto);
  }
}
