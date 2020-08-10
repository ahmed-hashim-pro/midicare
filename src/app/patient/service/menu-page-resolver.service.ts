import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {MenuPage, MenuPageService} from '@core/service/menu-page.service';

@Injectable()
export class MenuPageResolverService implements Resolve<void>{

  constructor(private menuPageService: MenuPageService) { }

  async resolve() : Promise<void> {
    this.menuPageService.MenuPages.next(
        [
          new MenuPage('Home', '/patient/app','home'),
          new MenuPage('Schedule', '/patient/schedule', 'calendar'),
          new MenuPage('Doctors', '/patient/doctors', 'people'),
          new MenuPage('About','/about', 'information-circle')
        ]
    );
  }
}
