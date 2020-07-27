import {Injectable, SkipSelf, Optional} from '@angular/core';
import {User} from '../../model/user';
import {CognitoAmplify} from "@amazon/cognito-amplify";

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
  signUp (username: string, password: string, opts: object) : Promise<User>;
  // User administration functionalities
  updateUser (user: User) : Promise<User>;
  // TODO: Provide the missing capabilities
  // Forgot password
  // Change password
}

@Injectable()
export class AuthService {
  private service: AuthServiceProvider;

  constructor(@Optional() @SkipSelf() private authService: AuthService) {
      // Making sure the service is singleton
      if (authService) {
        throw new Error('Authorization service is already injected');
      }
      // TODO: Create a mechanism for dynamic imports
      this.service = new CognitoAmplify();
  }

  public async getUser () : Promise<User> {
    return await this.service.getUser();
  }

  // Methods that exposes the 'IAuth' can be either decorated or pass through
  // the service

  public async signIn (username: string, password: string) : Promise<User> {
    return await this.service.signIn(username, password);
  }

  public async signOut () : Promise<User> {
    return await this.service.signOut();
  }

  public async signUp (username: string, password: string, opts: object) : Promise<User> {
    return await this.service.signUp(username, password, opts);
  }

  public async updateUser (user : User) : Promise<User> {
    // NO OP operation currently
    // TODO: Maintain update user group and information
    return null;
  }
}
