import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  async signOut () {
    await this.authService.signOut();
    await this.router.navigateByUrl('login');
  }
}
