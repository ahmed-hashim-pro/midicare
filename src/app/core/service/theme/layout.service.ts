import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public navigationBar = new BehaviorSubject<boolean>(false);
  public sideBar = new BehaviorSubject<boolean>(false);
  public footer = new BehaviorSubject<boolean>(false);
  public header = new BehaviorSubject<boolean>(false);

  constructor() { }

  noLayout() {
    this.disableNavigationBar();
    this.disableSideBar();
    this.disableHeader();
    this.disableFooter();
  }

  mainContent() {
    this.enableFooter();
    this.enableHeader();
    this.enableNavigationBar();
    this.disableSideBar();
  }

  mainContentNoHeader() {
    this.enableFooter();
    this.disableHeader();
    this.disableSideBar();
    this.enableNavigationBar();
  }

  contentWithMenu() {
    this.enableFooter();
    this.enableHeader();
    this.enableNavigationBar();
    this.enableSideBar();
  }

  mainContentNoNavigationBar() {
    this.enableHeader();
    this.enableFooter();
    this.enableSideBar();
    this.disableNavigationBar();
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
