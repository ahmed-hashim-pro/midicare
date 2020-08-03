import { Component, OnInit } from '@angular/core';
import {LayoutService} from '@core/service/theme/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.mainContentNoHeader();
  }

}
