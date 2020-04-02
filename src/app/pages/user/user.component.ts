import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/support/User';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private apiService: JsonplaceholderService, private route: ActivatedRoute) { }

  user: User;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.apiService.getUser(parseInt(this.route.snapshot.paramMap.get("userId"))).subscribe(resp => {
     this.user = resp;
    })
  }

}
