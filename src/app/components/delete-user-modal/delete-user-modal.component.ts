import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/support/api/users.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';
import { User } from 'src/app/support/User';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {

  constructor(private userService: UsersService, private modal: NgbModal, private router: Router, public activeModal: NgbActiveModal) { }
  user: User;
  loading:boolean = false;
  ngOnInit(): void {
  }

  deleteUser() {
    this.loading = true;
    this.userService.deleteUser(this.user.id).subscribe(resp => {
      this.loading = false;
      const deletedModal = this.modal.open(GenericModalComponent, { windowClass: 'modal-md', backdrop: 'static' }) //Open the message modal
      deletedModal.componentInstance.title = "User Deleted";
      deletedModal.componentInstance.advanceBtnText = "Okay"
      deletedModal.componentInstance.closeBtnText = "";
      deletedModal.result.finally(() => {
        this.router.navigateByUrl('/'); //Redirect to home page
      })
    })
  }

}
