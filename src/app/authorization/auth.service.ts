import { Injectable } from '@angular/core';
import {IAUTH} from "./auth/iauth";
import {User} from "./auth/user";

@Injectable({
  providedIn: 'root'
})
export class AUTHService {
  private auth: IAUTH;

  constructor(platform: string, opts: object) {
      switch (platform) {
        case 'cognito':
          // Initialize cognito auth in auth
        default:
          // Default implmentatoin cognito
      }
  }

  async getUser () : Promise<User> {
    return await this.auth.getUser();
  }

  // Methods that exposes the 'IAuth' can be either decorated or pass through
  // the service

  async signIn (username: string, password: string) : Promise<User> {
    return await this.auth.signIn(username, password);
  }

  async signOut () : Promise<User> {
    return await this.auth.signOut();
  }

  async signUp (username: string, password: string, opts: object) : Promise<User> {
    return await this.auth.signUp(username, password, opts);
  }

  async updateUser (user : User) : Promise<User> {
    // NO OP operation currently
    // TODO: Maintain update user group and information
    return null;
  }
}
