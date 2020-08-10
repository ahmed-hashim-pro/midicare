import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {MenuPage, MenuPageService} from '@core/service/menu-page.service';

@Injectable()
export class MenuPageResolverService implements Resolve<void>{

  constructor(private menuPageService: MenuPageService) { }

  async resolve() : Promise<void> {
    this.menuPageService.MenuPages.next(
        [
          new MenuPage('Home', '/app','home'),
          new MenuPage('Work Schedule', '/patient/schedule', 'calendar'),
          new MenuPage('Clinic', '/patient/doctors', 'medical-outline'),
          new MenuPage('About','/about', 'information-circle')
        ]
    );
  }
}
