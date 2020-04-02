import { Injectable } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiSerivce: JsonplaceholderService) {
    this.getAllUsers();
  }

  private allUsersSource = new BehaviorSubject([]);
  allUsers = this.allUsersSource.asObservable();

  getUser(userId: number): Observable<User> {
    return this.apiSerivce.getUser(userId);
  }
  deleteUser(userId: number): Observable<any> {
    return this.apiSerivce.deleteUser(userId);
  }
  getAllUsers(): void {
    this.apiSerivce.getAllUsers().subscribe(resp => this.allUsersSource.next(resp));
  }
  updateUser(userId: number, userPropsToUpdate: User): Observable<User> {
    return this.apiSerivce.updateUser(userId, userPropsToUpdate);
  }
  removeUserFromArray(user: User) {
    let allUsers = this.allUsersSource.value;
    allUsers = allUsers.filter((result) => {
      if (result.id != user.id)
        return result
    });
    this.allUsersSource.next(allUsers);
  }
}
