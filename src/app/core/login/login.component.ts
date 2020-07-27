import { Component, OnInit } from '@angular/core';
import {AUTHService} from '@core/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;

  constructor(private authService: AUTHService, private router: Router) { }

  ngOnInit() {}

  // TODO: Handle redirections

  async signIn() {
    await this.authService.signIn(this.username, this.password);
    await this.router.navigateByUrl('app');
  }

}
