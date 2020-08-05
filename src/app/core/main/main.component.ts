import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor() { }

  search(query) {
    console.log('I search for: ', query);
  }

  ngOnInit() {}

}
