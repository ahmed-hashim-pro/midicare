import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public changeName: boolean;
  public changePassword: boolean;
  public username: string;
  public account: {
    name: string,
    password: string,
    confirmPassword: string,
  };
  public toggles: {
    changeUsername: boolean
  };
  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.changePassword = false;
    this.changeName = false;
    const user = await this.authService.getUser();
    this.username = user.username;
    this.account = {
      name: '',
      password: '',
      confirmPassword: ''
    };
  }

  async logout() {
    await this.authService.signOut();
    this.router.navigateByUrl('/login')
  }

}
