import { Injectable } from '@angular/core';
import Peer from 'peerjs';

@Injectable()
export class WebRTCService {
  peer: Peer;
  mediaConnection: Peer.MediaConnection;
  myStream: MediaStream;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  options: Peer.PeerJSOption;

  constructor() {
    this.options = {
      config: {
        iceServers: [
          {
            urls: 'stun:stun.l.google.com:19302',
          },
          {
            urls: 'stun:127.0.0.1:3478'
          }
        ]
      }
    };
  }

  getMedia(myEl: HTMLMediaElement) {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then( (stream) => {
      this.myStream = stream;
      this.myEl = myEl;
      this.myEl.srcObject = this.myStream;
    }).catch( (error) => {
      console.log(error);
      console.error('[getMedia] cannot get user media');
    });
  }

  init(userId: string, myEl: HTMLMediaElement, partnerEl: HTMLMediaElement) {
    this.getMedia(myEl);
    this.createPeer(userId);
    this.partnerEl = partnerEl;
  }

  createPeer(userId: string) {
    this.peer = new Peer(userId, this.options);
    this.peer.on('open', () => {
      this.wait();
    });
  }

  call(partnerId: string) {
    this.mediaConnection = this.peer.call(partnerId, this.myStream);
  }

  wait() {
    this.peer.on('call', (call) => {
      call.answer(this.myStream);
      call.on('stream', (stream) => {
        this.partnerEl.srcObject = stream;
      });
    });
    this.peer.on('error', (err) => {
      console.log(err);
    });
  }
}
