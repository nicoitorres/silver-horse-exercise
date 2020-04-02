import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/support/User';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/support/api/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from 'src/app/components/generic-modal/generic-modal.component';
import { DeleteUserModalComponent } from 'src/app/components/delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UsersService, private route: ActivatedRoute, private modal: NgbModal, private router: Router) {
    this.getUser();
  }

  user: User;

  ngOnInit(): void {
  }

  async getUser() {
    const user = await this.userService.getUser(parseInt(this.route.snapshot.paramMap.get("userId"))).toPromise();
    if (user) { this.user = user; }
  }


  deleteUser() {

    const deleteModal = this.modal.open(DeleteUserModalComponent, { windowClass: 'modal-md', backdrop: 'static', keyboard:false });
    deleteModal.componentInstance.user = this.user;
  }

}
