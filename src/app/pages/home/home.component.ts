import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: JsonplaceholderService) { }

  ngOnInit(): void {
   
  }
}
