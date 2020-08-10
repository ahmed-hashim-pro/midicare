import {Injectable, Optional, SkipSelf} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export class MenuPage {
  private _title: String;
  private _url: String;
  private _icon: String;

  constructor(title: String, url: String, icon: String) {
    this._title = title;
    this._url = url;
    this._icon = icon;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get url(): String {
    return this._url;
  }

  set url(value: String) {
    this._url = value;
  }

  get icon(): String {
    return this._icon;
  }

  set icon(value: String) {
    this._icon = value;
  }
}


@Injectable({
  providedIn: 'root'
})
export class MenuPageService {
  public MenuPages : BehaviorSubject <MenuPage[]>;

  constructor(@Optional() @SkipSelf() private menuPageService: MenuPageService) {
    if (menuPageService) {
      throw new Error('MenuPageService has been already injected');
    }
    this.MenuPages = new BehaviorSubject<MenuPage[]>([]);
  }
}
