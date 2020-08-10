import {Injectable, Optional, SkipSelf} from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '@core/model/user';
import {ToastController} from '@ionic/angular';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(@Optional() @SkipSelf() private authGuard: AuthGuardService,private auth: AuthService,
              private router: Router, private toastController: ToastController) {
    if (this.authGuard) {
      throw new Error('AuthGuardService has been already injected');
    }
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return this.protect(route, state);
  }

  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    return this.protect(route, state)
  }

  private async protect(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    let user : User;
    try {
      user = await this.auth.getUser();
    } catch (err) {
      const toast = await this.toastController.create(
          {
            message: 'You need to login to use this section',
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
      return this.redirectToLogin(state.url);
    }

    if (route.data.roles) {
      if (!AuthGuardService.roleCheck(route.data.roles, user)) {
        return this.redirectToApplicationRoot();
      }
    }
    return true;
  }

  private static roleCheck(roles: string[], user: User) : boolean {
    for (const role of roles) {
      if (user.belongsToGroup(role)) {
        return true;
      }
    }
    return false;
  }

  private async redirectToLogin(returnURL: string) {
    await this.router.navigate(['login'], { queryParams: { returnURL: returnURL }});
    return false;
  }

  private async redirectToApplicationRoot() {
    await this.router.navigate(['app']);
    return false;
  }
}
