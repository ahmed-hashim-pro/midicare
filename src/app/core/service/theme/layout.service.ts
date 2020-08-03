import {Injectable, Optional, SkipSelf} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public navigationBar: BehaviorSubject<boolean>;
  public sideBar: BehaviorSubject<boolean>;
  public footer : BehaviorSubject<boolean>;
  public header : BehaviorSubject<boolean>;

  constructor(@Optional() @SkipSelf() layoutService: LayoutService) {
    if (layoutService) {
      throw new Error('Layout service has already been injected');
    }
    this.footer = new BehaviorSubject<boolean>(false);
    this.navigationBar = new BehaviorSubject<boolean>(false);
    this.sideBar = new BehaviorSubject<boolean>(false);
    this.header = new BehaviorSubject<boolean>(false);
  }

  noLayout() {
    setTimeout(
        () => {
          this.disableNavigationBar();
          this.disableSideBar();
          this.disableHeader();
          this.disableFooter();
        }
    )

  }

  mainContent() {
    setTimeout(
        () => {
          this.enableFooter();
          this.enableHeader();
          this.enableNavigationBar();
          this.disableSideBar();
        }
    );
  }

  mainContentNoHeader() {
    setTimeout(
        () => {
          this.enableFooter();
          this.disableHeader();
          this.disableSideBar();
          this.enableNavigationBar();
        }
    );
  }

  contentWithMenu() {
    setTimeout(
        () => {
          this.enableFooter();
          this.enableHeader();
          this.enableNavigationBar();
          this.enableSideBar();
        }
    );
  }

  mainContentNoNavigationBar() {
    setTimeout(
        () => {
          this.enableHeader();
          this.enableFooter();
          this.enableSideBar();
          this.disableNavigationBar();
        }
    );
  }

  private enableNavigationBar() {
    this.navigationBar.next(true);
  }

  private disableNavigationBar() {
    this.navigationBar.next(false);
  }

  private enableSideBar() {
    this.sideBar.next(true);
  }

  private disableSideBar() {
    this.sideBar.next(false);
  }

  private enableHeader() {
    this.header.next(true);
  }

  private disableHeader() {
    this.header.next(false);
  }

  private enableFooter() {
    this.footer.next(true);
  }

  private disableFooter() {
    this.footer.next(false);
  }
}
