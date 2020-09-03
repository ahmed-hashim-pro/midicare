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
    confirmationCode : string
  };
  public submitted: boolean;
  private showSignIn: boolean = true;
  private showForgot: boolean = false;
  private showActiveSignup: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
              private toastController: ToastController) { }

  ngOnInit() {
    this.submitted = false;
    this.login = {
      username: '',
      password: '',
      confirmationCode : ''

    };
  }

  async signIn() {
    this.submitted = true;
   
      try {
        const user = await this.authService.signIn(this.login.username, this.login.password);
        const returnURL = this.route.snapshot.queryParams['returnURL'];
        if (returnURL) {
          await this.router.navigateByUrl(returnURL);
        } else {
          if (user.groups.includes('Patients')) {
            await this.router.navigate(['patient']);
          } else if (user.groups.includes('Doctors')) {
            await this.router.navigate(['doctor']);

         }else if(user.groups.includes('Admins')){
          await this.router.navigate(['dashboard']);

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
        throw new Error(e);
      }
    
  }

  async signUp() {
    const user = await this.authService.signUp(this.login.username, this.login.password,null);
    console.log(user);
    //await this.router.navigateByUrl('/signup')
  }
  async changePassword() {
    const user = await this.authService.changePassword(this.login.username, this.login.password, '123456789',null);
    console.log(user);
  }
  async confirmSignUp() {
    const user = await this.authService.confirmSignUp(this.login.username, this.login.confirmationCode);
    console.log(user);
  }
  
  showSignInFn() {
    this.showSignIn = true;
    this.showForgot = false;
    this.showActiveSignup = false;
  }
  showForgotFn() {
    this.showSignIn = false;
    this.showForgot = true;
    this.showActiveSignup = false;
  }
  showActiveSignupFn() {
    this.showSignIn = false;
    this.showForgot = false;
    this.showActiveSignup = true;
  }
}
