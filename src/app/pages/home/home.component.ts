import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/support/User';
import { UsersService } from 'src/app/support/api/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UsersService) { 
  }
  allUsers: User[];
  ngOnInit(): void {
    this.userService.allUsers.subscribe(resp=>this.allUsers = resp);
  }
 
}
