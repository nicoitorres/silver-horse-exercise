import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'silver-horse-exercise';
  constructor(private router: Router, titleService: Title) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { //If router change
        var title = this.getTitle(router.routerState, router.routerState.root).join('-'); //Get the title
        titleService.setTitle(title); //Set the title
      }
    });
  }
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}


