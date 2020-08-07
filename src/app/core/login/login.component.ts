import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutService} from '@core/service/theme/layout.service';
import {NgForm} from '@angular/forms';
import {ToastController} from '@ionic/angular';

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
  public submitted: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
              private layoutService: LayoutService, private toastController: ToastController) { }

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
      try {
        await this.authService.signIn(this.login.username, this.login.password);
        if (this.returnURL) {
          await this.router.navigateByUrl(this.returnURL);
        } else {
          await this.router.navigateByUrl('');
        }
      } catch (e) {
        const toast = await this.toastController.create(
            {
              message: 'Username or password is not accepted by the system',
              mode: 'md',
              duration: 5000,
              position: 'middle',
              keyboardClose: true,
              animated: true,
              buttons: [
                {
                  text: 'Dismiss',
                  icon: 'remove-circle',
                  role: 'cancel'
                }
              ]
            }
        );
        await toast.present();
      }
    }
  }

  async signUp() {
    await this.router.navigateByUrl('/signup')
  }
}
