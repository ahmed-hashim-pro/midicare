import { Component, OnInit, OnDestroy } from '@angular/core';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements  OnInit{

  async ngOnInit() {

  }
}