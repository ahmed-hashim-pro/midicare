import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {WebRTCService} from '@core/service/webrtc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-call-doctor',
  templateUrl: './call-doctor.component.html',
  styleUrls: ['./call-doctor.component.scss'],
})
export class CallDoctorComponent implements OnInit, AfterViewInit {
  @ViewChild('doctorVideo') doctorVideoElement: HTMLMediaElement;
  @ViewChild('patientVideo') patientVideoElement: HTMLMediaElement;

  private doctorID : string;

  constructor(private authService: AuthService, private webRTCService: WebRTCService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        async (params) => {
          this.doctorID = params['id'];
        }
    )
  }

  async ngAfterViewInit() {
    try {
      const user = await this.authService.getUser();
      this.webRTCService.init(
          user.username, this.patientVideoElement, this.doctorVideoElement
      );
    } catch (err) {

    }
  }

  async call () {
    try {
      this.webRTCService.call(this.doctorID);
    } catch (e) {
      console.log(e);
    }
  }
}
