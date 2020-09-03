import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent implements OnInit {
  @Input('name')
  public name: string;
  @Input('title')
  public title: string;
  @Input('note')
  public note: string;
  @Input('img')
  public img: string;

  constructor() { }

  ngOnInit() {
  }

}
