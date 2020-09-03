import { Component, OnInit } from '@angular/core';
import {Session} from '@core/model/session';
import {SessionService} from '@core/service/data/session.service';
import {AuthService} from '@core/service/auth/auth.service';
import {Patient} from '@core/model/patient';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  public sessions : Session[];

  constructor(private sessionService: SessionService, private authService: AuthService) { }

  async ngOnInit() {
    try {
      const user = await this.authService.getUser();
      const patient = new Patient(user.username, null);
      this.sessions = await this.sessionService.findSessionsByPatient(patient);
    } catch (err) {
    }
  }

  async cancel (slidingItem, session) {
    console.log('The sliding item: ', slidingItem, 'The session: ', session);
  }

}
