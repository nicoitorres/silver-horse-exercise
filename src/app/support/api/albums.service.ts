import { Injectable } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Observable } from 'rxjs';
import { Album } from '../Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private apiService: JsonplaceholderService) { }

  getUserAlbums(userId:number):Observable<Album[]> {
    return this.apiService.getUserAlbums(userId);
  }
}
