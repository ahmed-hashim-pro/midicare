import {Injectable, SkipSelf, Optional} from '@angular/core';
import {IAUTH} from './iauth';
import {User} from '../../model/user';
import CognitoAmplify from "@amazon/cognito-amplify";

@Injectable()
export class AUTHService {
  private auth: IAUTH;

  constructor(@Optional() @SkipSelf() private authService: AUTHService) {
      // Making sure the service is singleton
      if (authService) {
        throw new Error('Authorization service is already injected');
      }
      // TODO: Create a mechanism for dynamic imports
      this.auth = new CognitoAmplify();
  }

  public async getUser () : Promise<User> {
    return await this.auth.getUser();
  }

  // Methods that exposes the 'IAuth' can be either decorated or pass through
  // the service

  public async signIn (username: string, password: string) : Promise<User> {
    return await this.auth.signIn(username, password);
  }

  public async signOut () : Promise<User> {
    return await this.auth.signOut();
  }

  public async signUp (username: string, password: string, opts: object) : Promise<User> {
    return await this.auth.signUp(username, password, opts);
  }

  public async updateUser (user : User) : Promise<User> {
    // NO OP operation currently
    // TODO: Maintain update user group and information
    return null;
  }
}
