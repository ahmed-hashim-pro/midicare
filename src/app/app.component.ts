import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LayoutService} from '@core/service/theme/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public header: boolean;
  public footer: boolean;
  public sideBar: boolean;
  public navigationBar: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private layoutService: LayoutService
  ) {
  }


   ngOnInit() {
     this.initializeApp();
     this.subscribeToLayoutService();
   }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private subscribeToLayoutService() {
    this.layoutService.header.subscribe(val => {
      this.header = val;
    });
    this.layoutService.footer.subscribe(val => {
      this.footer = val;
    });
    this.layoutService.sideBar.subscribe(val => {
      this.sideBar = val;
    });
    this.layoutService.navigationBar.subscribe(val => {
      this.navigationBar = val;
    });
  }
}
