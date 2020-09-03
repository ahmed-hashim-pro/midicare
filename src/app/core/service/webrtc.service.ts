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
             urls: 'stun:stun.ekiga.net',
            // urls: 'turn:turn.bistri.com:80',
            // credential: 'homeo',
            // username: 'homeo'
          }
        ]
      }
    };
  }

  getMedia(myEl: HTMLMediaElement) {
    // navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then( (stream) => {
    //   this.myStream = stream;
    //   this.myEl = myEl;
    //   this.myEl.srcObject = this.myStream;
    //   console.log('get media success');
    // }).catch( (error) => {
    //   console.log(error);
    //   console.error('[getMedia] cannot get user media');
    // });
  }

  init(userId: string, myEl: HTMLMediaElement, partnerEl: HTMLMediaElement) {

    // this.getMedia(myEl);
    // this.createPeer(userId);
    // this.partnerEl = partnerEl;
    // console.log('init server ');


  }

  createPeer(userId: string) {
    // this.peer = new Peer(userId, this.options);
    // this.peer.on('open', () => {
    // console.log('create a peer');
    // this.wait();
    // });

  }

  async call(partnerId: string) {
    // this.mediaConnection = this.peer.call(partnerId, this.myStream);
    // try {
    //   await  this.mediaConnection.on('stream', (stream) => {
    //     this.partnerEl.srcObject = stream;
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
 
    // console.log('call a peer');
  }

  call2(partnerId: string) {
    const call = this.peer.call(partnerId, this.myStream);
    call.on('stream', (stream) => {
      this.partnerEl.srcObject = stream;
    });
  }
  wait() {
    // this.peer.on('call', (call) => {
    //   call.answer(this.myStream);
    //   console.log('answer call');
    //   call.on('stream', (stream) => {
    //     this.partnerEl.srcObject = stream;
    //     console.log('stream call');
    //   });
    //   console.log('wait');


    // });
    // this.peer.on('error', (err) => {
    //   console.log(err);
    //   console.log('error waiting');

    // });
  }
}
