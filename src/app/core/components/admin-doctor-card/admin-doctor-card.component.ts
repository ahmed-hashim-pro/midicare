import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-doctor-card',
  templateUrl: './admin-doctor-card.component.html',
  styleUrls: ['./admin-doctor-card.component.scss'],
})
export class AdminDoctorCardComponent implements OnInit {
  @Input('name')
  public name: string;
  @Input('title')
  public title: string;
  @Input('note')
  public note: string;
  @Input('img')
  public img: string;
  constructor() { }

  ngOnInit() {}

}
