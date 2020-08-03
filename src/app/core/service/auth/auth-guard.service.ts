import {Injectable, Optional, SkipSelf} from '@angular/core';
import {AuthService} from '@core/service/auth/auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '@core/model/user';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(@Optional() @SkipSelf() private authGuard: AuthGuardService,private auth: AuthService,
              private router: Router) {
    if (this.authGuard) {
      throw new Error('AuthGuardService has been already injected');
    }
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> {
    let user : User;
    try {
      user = await this.auth.getUser();
    } catch (err) {
      return this.redirectToLogin(state.url);
    }

    if (route.data.roles) {
      if (!this.roleCheck(route.data.roles, user)) {
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

  private redirectToLogin(returnURL: string) {
    this.router.navigateByUrl('login', { queryParams: { returnUrl: returnURL }});
    return false;
  }

  private redirectToApplicationRoot() {
    this.router.navigateByUrl('app');
    return false;
  }
}
