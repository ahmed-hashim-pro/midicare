import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public filter: string;
  public tabs: {
    name: string,
    icon: string,
    path: string
  }[];

  constructor() { }

  search(query) {
    console.log('I search for: ', query);
  }

  ngOnInit() {
    this.tabs = [
      {
        name: 'Schedule',
        icon: 'calendar',
        path: 'app'
      },
      {
        name: 'Help',
        icon: 'information',
        path: 'login'
      }
    ];
  }

  visit(path: string) {
    console.log('I have been visited', path);
  }
}
