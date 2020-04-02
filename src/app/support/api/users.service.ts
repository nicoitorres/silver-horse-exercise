import { Injectable } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiSerivce: JsonplaceholderService) { }

  getUser(userId: number): Observable<User> {
    return this.apiSerivce.getUser(userId);
  }
  deleteUser(userId:number): Observable<any>{
    return this.apiSerivce.deleteUser(userId);
  }
}
