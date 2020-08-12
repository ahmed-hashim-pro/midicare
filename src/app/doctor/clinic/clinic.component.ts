import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {WebRTCService} from '@core/service/webrtc.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
})
export class ClinicComponent implements OnInit, AfterViewInit {
  @ViewChild('doctorVideo') doctorVideoElement: HTMLMediaElement;
  @ViewChild('patientVideo') patientVideoElement: HTMLMediaElement;

  constructor(private authService: AuthService, private webRTCService: WebRTCService) {}

  async ngOnInit() {
  }

  async ngAfterViewInit() {
    console.log(this.doctorVideoElement);
    try {
      const user = await this.authService.getUser();
      this.webRTCService.init(
          user.username, this.doctorVideoElement, this.patientVideoElement
      );
    } catch (err) {

    }
  }
}
