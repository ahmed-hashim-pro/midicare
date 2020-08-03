import { Component, OnInit } from '@angular/core';
import {LayoutService} from '@core/service/theme/layout.service';

@Component({
  selector: 'app-create-work-slot',
  templateUrl: './create-work-slot.component.html',
  styleUrls: ['./create-work-slot.component.scss'],
})
export class CreateWorkSlotComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.mainContentNoHeader();
  }

}
