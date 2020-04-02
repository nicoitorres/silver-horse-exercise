import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../support/User';
import { map, catchError } from 'rxjs/operators';
import { Album } from '../support/Album';
import { Post } from '../support/Post';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from '../components/generic-modal/generic-modal.component';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private httpclient: HttpClient, private router: Router, private modal: NgbModal) { }

  getUser(userId: number): Observable<User> {
    return this.httpclient.get<User>(`${this.apiUrl}users/${userId}`).
      pipe(catchError(this.handleError<User>(`getUser id=${userId}`)));
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl}users/${userId}`).
      pipe(catchError(this.handleError<User>(`getUser id=${userId}`)));
  }

  getUserAlbums(userId: number): Observable<Album[]> {
    return this.httpclient.get(`${this.apiUrl}users/${userId}/albums`).pipe(map((data: Album[]) => {
      return data;
    }));
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.httpclient.get(`${this.apiUrl}users/${userId}/posts`).pipe(map((data: Post[]) => {
      return data;
    }));
  }



  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      if (error.status === 404) {
        this.router.navigateByUrl('/404')
      }
      else if (error.status === 0) {
        const errorModal = this.modal.open(GenericModalComponent, { windowClass: 'modal-md', keyboard: false });
        errorModal.componentInstance.title = "API Error";
        errorModal.componentInstance.advanceBtnText = "Home";
        errorModal.componentInstance.description = "An unknown error occured";
        errorModal.componentInstance.advanceBtnText = "Go Home";
        errorModal.result.finally(() => { this.router.navigateByUrl('/') });
      }
      return of(result as T);
    };
  }

}
