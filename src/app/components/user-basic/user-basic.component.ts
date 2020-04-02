import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/support/User';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.scss']
})
export class UserBasicComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
