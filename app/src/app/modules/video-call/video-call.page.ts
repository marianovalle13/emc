import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasePage } from '../../core/base.page';
import { Platform } from '@ionic/angular';
import { PageService } from '../../core/page.service';
import { NgZone } from '@angular/core';

declare var OT:any;

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.page.html',
  styleUrls: ['./video-call.page.scss'],
})
export class VideoCallPage extends BasePage {
  session: any;
  publisher: any;
  publisherOptions: any;
  subscriberOptions: any;
  apiKey: any;
  sessionId: string;
  token: string;
  connected = false;

  ui = {
    calling: {
      icon: 'ellipsis-horizontal',
      iconColor: 'secondary'
    },
    disconnected: {
      icon: 'call',
      iconColor: 'tertiary'
    },
    connected: {
      icon: 'close',
      iconColor: 'danger'
    }
  };

  callStatus = 'disconnected';

  // constructor(
  //   public router: Router
  // ) {
    // TEST
    // this.apiKey = '45828062';
    // this.sessionId = '2_MX40NTgyODA2Mn5-MTYwMDU1MjYxODgxNH5HbmU1d3V0YWRMalBXQzhPOE1EeW9ZcTJ-UH4';
    // this.token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9NmY0ZWYyMDA5NTM2NjA1YTUwMzhlYjE5M2E5ZTc3ZjgxZDEzYmUzNTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWXdNRFUxTWpZeE9EZ3hOSDVIYm1VMWQzVjBZV1JNYWxCWFF6aFBPRTFFZVc5WmNUSi1VSDQmY3JlYXRlX3RpbWU9MTYwMDU1MzUxNiZub25jZT0wLjgyMTgwNzY1MzE2NzkzMjgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMDYzOTkxNg==';

    // EMC
    // this.apiKey = '46926504';
    // this.sessionId = '1_MX40NjkyNjUwNH5-MTYwMDUyODIzNjI1MX5wckNVU0FxMTA5WjVRVkJLT3FYL0JMbTl-fg';
    // this.token = 'T1==cGFydG5lcl9pZD00NjkyNjUwNCZzaWc9OTMyMzlhYTc0ZDY0OWI1MGZkNDNhYjBmMzgxMDg4NzQzMWNjZjE5NTpzZXNzaW9uX2lkPTFfTVg0ME5qa3lOalV3Tkg1LU1UWXdNRFV5T0RJek5qSTFNWDV3Y2tOVlUwRnhNVEE1V2pWUlZrSkxUM0ZZTDBKTWJUbC1mZyZjcmVhdGVfdGltZT0xNjAwNTMzMTY5Jm5vbmNlPTAuOTQwMjUyNDQxODMzODQyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MDA2MTk1NjkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
  // }


  constructor(
    public ngZone: NgZone,
    public platform: Platform,
    public pageService: PageService
  ) {
    super(pageService);
  }

  ngOnInit() {

    this.pageService.httpGet(
      this.settings.endPoints.videoCalls + '/' + this.global.getUser().id + this.settings.endPointsMethods.videoCalls.room  
    )
    .then( (response) => {
      console.log(response);
      this.apiKey = response.data.apiKey;
      this.sessionId = response.data.sessionId;
      this.token = response.data.token;
      this.publisherOptions = response.data.publisherOptions || {};
      this.subscriberOptions = response.data.subscriberOptions || {};
    })
    .catch( (reason) => {
      this.pageService.showError(reason);
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      if(this.callStatus == 'connected') {
        this.session.disconnect();
      }
      this.pageService.navigateBack();
    });
  }

  back() {
    if(this.callStatus == 'connected') {
      this.session.disconnect();
    }
    this.pageService.navigateBack();
  }

  toggleCall() {
    if(this.callStatus == 'disconnected') {
      this.callStatus = 'calling';
      this.startCall();
    } else if(this.callStatus == 'connected') {
      this.stopCall();
    }
  }

  startCall() {

    console.log('------START');

    try{
      let self = this;
      this.session = OT.initSession(this.apiKey, this.sessionId);
      this.publisher = OT.initPublisher('publisher',this.publisherOptions);

      this.session.on({
        streamCreated: (event: any) => {
          console.log('------stream created');
          this.session.subscribe(event.stream, 'subscriber',this.subscriberOptions);
          OT.updateViews();
        },
        streamDestroyed: (event: any) => {
          console.log('------stream destroyed');
          console.log(`Stream ${event.stream.name} ended because ${event.reason}`);
          OT.updateViews();
        },
        sessionConnected: (event: any) => {
          console.log('------session connected');
          // self.callStatus = 'connected';
          this.session.publish(this.publisher);
          // this.connected = true;
        },
        sessionDisconnected: (event: any) => {
          console.log('------session disconnected');
          // document.getElementById("publisher").classList.add("publisher");
          // document.getElementById("subscriber").classList.add("subscriber");
          // this.callStatus = 'disconnected';
          this.disconnectCallUI();
          console.log(this.callStatus);
          // self.callStatus = 'connected';
          // this.connected = true;
        }
      });


      this.session.connect(this.token, (error: any) => {
        if (error) {
          console.log(`There was an error connecting to the session ${error}`);
          this.callStatus = 'disconnected';
        } else {
          this.callStatus = 'connected';
        }
      });
    } catch(error) {
      console.log(error);
      this.callStatus = 'disconnected';
    }
  }

  connect() {
    console.log('------CONNECT');
  }

  disconnectCallUI() {
    console.log("*** disconnectCallUI");
    document.getElementById("publisher").classList.add("publisher");
    document.getElementById("subscriber").classList.add("subscriber");

    this.ngZone.run(() => {
      this.callStatus = 'disconnected';
    });
  }

  stopCall() {
    console.log('------STOP');
    this.session.disconnect();

    // setTimeout(() => {
    //   document.getElementById("publisher").classList.add("publisher");
    //   document.getElementById("subscriber").classList.add("subscriber");
    // }, 3000);

  }

  goToMap() {
    this.pageService.navigateRoute("travel");
  }
}
