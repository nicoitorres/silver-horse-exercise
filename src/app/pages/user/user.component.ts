import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/support/User';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/support/api/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UsersService, private route: ActivatedRoute) {
    this.getUser();
  }

  user: User;

  ngOnInit(): void {
  }

  async getUser() {
    const user = await this.userService.getUser(parseInt(this.route.snapshot.paramMap.get("userId"))).toPromise();
    if (user) { this.user = user; }
  }


  deleteUser(){

  }

}
