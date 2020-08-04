import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutService} from '@core/service/theme/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  returnURL: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.returnURL = this.route.snapshot.queryParams['returnURL'] || 'app';
    this.layoutService.noLayout();
  }

  async signIn() {
    await this.authService.signIn(this.username, this.password);
    if (this.returnURL) {
      await this.router.navigateByUrl(this.returnURL);
    } else {
      await this.router.navigateByUrl('');
    }
  }

}
