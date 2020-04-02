import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {

  title: string = '';
  advanceBtnText:string = 'Okay';
  closeBtnText:string = 'Cancel';
  description:string = '';

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
