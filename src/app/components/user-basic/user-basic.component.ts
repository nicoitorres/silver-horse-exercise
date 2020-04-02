import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/support/User';
import { UsersService } from 'src/app/support/api/users.service';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.scss']
})
export class UserBasicComponent implements OnInit {
  @Input() user: User;
  editEmail: boolean = false;
  updatingUser: boolean = false;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  updateUser() {
    this.updatingUser = true;
    this.userService.updateUser(this.user.id, this.user).subscribe(resp => {
      this.user = resp;
    }, error => { }, () => { this.updatingUser = false; this.editEmail = false; });

  }
}
