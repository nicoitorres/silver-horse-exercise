import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/support/User';
import { UsersService } from 'src/app/support/api/users.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  constructor(private userService: UsersService, public modal: NgbActiveModal) { }
  type: string = "";
  allUsers: User[];
  ngOnInit(): void {
    this.userService.allUsers.subscribe(resp => this.allUsers = resp);
  }

}
