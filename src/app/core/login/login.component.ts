import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutService} from '@core/service/theme/layout.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login : {
    username : string,
    password : string
  };
  private returnURL: string;
  private submitted: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnURL'] || 'app';
    this.layoutService.noLayout();
    this.submitted = false;
    this.login = {
      username: '',
      password: ''
    };
  }

  async signIn(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      await this.authService.signIn(this.login.username, this.login.password);
      if (this.returnURL) {
        await this.router.navigateByUrl(this.returnURL);
      } else {
        await this.router.navigateByUrl('');
      }
    }
  }

  async signUp() {
    await this.router.navigateByUrl('/signup')
  }
}
