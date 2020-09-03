import {AfterViewInit, Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {WebRTCService} from '@core/service/webrtc.service';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc'; // Add


@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
})
export class ClinicComponent implements OnInit, AfterViewInit {
 // @ViewChild('doctorVideo') doctorVideoElement: HTMLMediaElement;
 // @ViewChild('patientVideo') patientVideoElement: HTMLMediaElement;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  localStream: Stream // Add
  remoteCalls: any = []; // Add
  callStarted:boolean=false;
  micMuted:boolean = false;
  videoMuted:boolean = false;
  constructor(private authService: AuthService, private webRTCService: WebRTCService, public webRTC: WebRTCService,
    public elRef: ElementRef,private agoraService: AngularAgoraRtcService)
     {
      this.agoraService.createClient();
    }

  async ngOnInit() {

  }

  async ngAfterViewInit() {
    try {
      //maybe return a null
      const user = await this.authService.getUser();
      this.myEl = this.elRef.nativeElement.querySelector('#my-video');
      this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
      this.webRTCService.init(
          user.username,  this.myEl, this.partnerEl
      );
    } catch (err) {

    }
  }

  startCall() {
    this.agoraService.client.join(null, '1000', null, (uid) => {
      this.localStream = this.agoraService.createStream(uid, true, null, null, true, false);
      this.localStream.setVideoProfile('720p_3');
      this.subscribeToStreams();
      this.callStarted=true;
    });
  }

  // Add
  private subscribeToStreams() {
    this.localStream.on("accessAllowed", () => {
      console.log("accessAllowed");
    });
    // The user has denied access to the camera and mic.
    this.localStream.on("accessDenied", () => {
      console.log("accessDenied");
    });

    this.localStream.init(() => {
      console.log("getUserMedia successfully");
      this.localStream.play('agora_local');
      this.agoraService.client.publish(this.localStream, function (err) {
        console.log("Publish local stream error: " + err);
      });
      this.agoraService.client.on('stream-published', function (evt) {
        console.log("Publish local stream successfully");
      });
    }, function (err) {
      console.log("getUserMedia failed", err);
    });

    this.agoraService.client.on('error', (err) => {
      console.log("Got error msg:", err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.agoraService.client.renewChannelKey("", () => {
          console.log("Renew channel key successfully");
        }, (err) => {
          console.log("Renew channel key failed: ", err);
        });
      }
    });

    // Add
    this.agoraService.client.on('stream-added', (evt) => {
      const stream = evt.stream;
      this.agoraService.client.subscribe(stream, (err) => {
        console.log("Subscribe stream failed", err);
      });
    });

    // Add
    this.agoraService.client.on('stream-subscribed', (evt) => {
      const stream = evt.stream;
      if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)) this.remoteCalls.push(`agora_remote${stream.getId()}`);
      setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 2000);
    });

    // Add
    this.agoraService.client.on('stream-removed', (evt) => {
      const stream = evt.stream;
      stream.stop();
      this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      console.log(`Remote stream is removed ${stream.getId()}`);
    });

    // Add
    this.agoraService.client.on('peer-leave', (evt) => {
      const stream = evt.stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }
  muteMic()
  {
    //this.localStream.muteAudio(true);
    this.micMuted?this.localStream.enableAudio():this.localStream.disableAudio()

    this.micMuted = !this.micMuted;
  }
  muteCamera()
  {
   // this.localStream.muteVideo();
   this.videoMuted?this.localStream.enableVideo():this.localStream.disableVideo()

   this.videoMuted = !this.videoMuted;
  }
  endCall()
  {
    this.callStarted=false;

   this.localStream.close();
   this.agoraService.client.unsubscribe();
   this.agoraService.client.unpublish();
   this.agoraService.client.leave();
   


  }
  
}
