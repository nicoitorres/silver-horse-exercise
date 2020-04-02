import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/support/User';
import { UsersService } from 'src/app/support/api/users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {

  constructor(private userService: UsersService) {
  }
  allUsers: User[];
  private ngUnsubscribe = new Subject();

  ngOnInit(): void {
    this.userService.allUsers.pipe(takeUntil(this.ngUnsubscribe)).subscribe(resp => {
      this.allUsers = resp;
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
