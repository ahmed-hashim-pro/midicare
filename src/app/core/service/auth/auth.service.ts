import {Injectable, SkipSelf, Optional, Inject} from '@angular/core';
import {User} from '../../model/user';
import {BehaviorSubject} from 'rxjs';

/**
 * Authentication and authorization interface to be used all over
 * the application.
 * The interface represents the strategy of the 'Identity Server' with
 * the application client, the application client must adhere to the
 * specification on this interface all the time, to allow portability to
 * different 'Identity Server' in future
 */
export interface AuthServiceProvider {
  // The authenticated user method
  getUser () : Promise<User>;
  // Basic sign in/out/up functionalities
  signIn (username: string, password: string) : Promise <User> ;
  signOut () : Promise<User>;
  signUp (username: string, password: string, opts: object) : Promise<any>;
  changePassword (username: string, oldPassword: string, newPassword: string, opts: object) : Promise<any>;
  confirmSignUp(username: string, code: string) : Promise<any>;
  isSignedIn() : Promise<boolean>;
  // TODO: Provide the missing capabilities
  // Forgot password
  // Change password
}

@Injectable()
export class AuthService {
  public user: BehaviorSubject<User>;

  private service: AuthServiceProvider;

  constructor(@Optional() @SkipSelf() private authService: AuthService,
              @Inject('AuthServiceProvider') private authServiceProvider: AuthServiceProvider) {
      // Making sure the service is singleton
      if (authService) {
        throw new Error('Authorization service is already injected');
      }
      this.service = authServiceProvider;
      this.user = new BehaviorSubject<User>(new User(null, null, null));
  }

  public async getUser () : Promise<User> {
    const user = await this.service.getUser();
    this.user.next(user);
    return user;
  }

  // Methods that exposes the 'IAuth' can be either decorated or pass through
  // the service

  public async signIn (username: string, password: string) : Promise<User> {
    const user = await this.service.signIn(username, password);
    this.user.next(user);
    return user;
  }

  public async signOut () : Promise<User> {
    const user = await this.service.signOut();
    this.user.next(user);
    return user;
  }
  


  
  public async changePassword (username: string, oldPassword: string, newPassword: string, opts: object) : Promise<'SUCCESS'> {
   
    try{
      const user = await this.service.changePassword(username, oldPassword,newPassword, opts);
      //this.user.next(user);
      return 'SUCCESS';
    }catch (e) {
        console.log(e);
      }
  }
  
public async confirmSignUp(username: string, code: string) : Promise<any> {
   
    try{
      const user = await this.service.confirmSignUp(username, code);
      //this.user.next(user);
      return true;
    }catch (e) {
        console.log(e);
      }
  }
  

  public async isSingedIn () : Promise <boolean> {
    return await this.service.isSignedIn();
  }

  async  signUp(username: string, password: string, opts: object): Promise <any> {
    try {
      const user = await this.service.signUp(
            username,
            password,
            opts
        );
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }}

}
