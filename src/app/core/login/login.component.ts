import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  public submitted: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
              private toastController: ToastController) { }

  ngOnInit() {
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
        const user = await this.authService.signIn(this.login.username, this.login.password);
        const returnURL = this.route.snapshot.queryParams['returnURL'];
        if (returnURL) {
          await this.router.navigateByUrl(returnURL);
        } else {
          if (user.groups.includes('Patients')) {
            await this.router.navigate(['patient','app']);
          } else if (user.groups.includes('doctors')) {
            await this.router.navigate(['doctor','app']);
          }
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
