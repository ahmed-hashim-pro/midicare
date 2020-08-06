import { Auth } from 'aws-amplify';
import { User } from '@core/model/user';
import {AuthServiceProvider} from '@core/service/auth/auth.service';
import {Injectable} from '@angular/core';
// Auth is pre-configured in the Application Root
// before hand for all AWS AMPLIFY Services
@Injectable()
export class CognitoAmplify implements AuthServiceProvider {
    constructor() {
    }

    public async getUser () : Promise<User> {
        const awsUser = await Auth.currentAuthenticatedUser();
        return CognitoAmplify.toUser(awsUser);
    }

    public async signIn (username: string, password: string) : Promise<User> {
        const awsUser = await Auth.signIn(username, password);
        return CognitoAmplify.toUser(awsUser);
    }

    public async signOut () : Promise<User> {
        await Auth.signOut();
        return new User(null, null, {});
    }

    public async isSignedIn () : Promise<boolean> {
        return (await Auth.currentCredentials()).authenticated
    }

    signUp(username: string, password: string, opts: object): Promise<User> {
        // NO OP operation
        return Promise.resolve(new User(null, null, {}));
    }

    // Auxillary functions
    private static toUser (awsUser : any) : User {
        return new User(
            awsUser.username,
            awsUser.getSignInUserSession().getAccessToken().payload['cognito:groups'],
            awsUser.attributes
        );
    }
}
