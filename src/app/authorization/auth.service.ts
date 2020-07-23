import { Injectable } from '@angular/core';
import {IAUTH} from "./auth/iauth";
import {User} from "./auth/user";
import {CognitoAmplify} from "./auth/cognito-amplify";

@Injectable({
  providedIn: 'root'
})
export class AUTHService {
  private auth: IAUTH;

  constructor(platform: string = 'cognito', opts: object = {}) {
      switch (platform) {
        case 'cognito':
          // Initialize cognito auth in auth
              this.auth = new CognitoAmplify();
              break;
        default:
          // Default implmentatoin cognito
              this.auth = new CognitoAmplify();
      }
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
