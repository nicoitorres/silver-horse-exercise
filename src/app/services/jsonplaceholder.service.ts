import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../support/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private httpclient: HttpClient) { }

  getUsers(userId?: number): Observable<User[]> {
    return this.httpclient.get(`${this.apiUrl}users/${userId ? userId : ''}`).pipe(map((data: User[]) => {
      return data;
    }));
  }

}
