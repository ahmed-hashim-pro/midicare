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
        if (!awsUser.username) {
            throw new Error('no user found');
        }
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

    async signUp(username: string, password: string, attributes: object): Promise<any> {
        // NO OP operation
        
        try {
            const  user  = await Auth.signUp({
                username,
                password,
                attributes
            });
            //console.log(user);
            return CognitoAmplify.toUser(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
        
    }
    async changePassword(username: string, oldPassword: string, newPassword: string, opts: object): Promise<'SUCCESS'> {
        // NO OP operation
        //aws cognito-idp admin-set-user-password --user-pool-id eu-central-1_dfn4t38Hm --username ahmedhashim@tqweem.com --password passpass --permanent
        const awsUser = await Auth.changePassword(username, oldPassword,newPassword);
        return 'SUCCESS';
        //return CognitoAmplify.toUser(awsUser);
        //return Promise.resolve(new User(null, null, {}));
    }
    async confirmSignUp(username: string, code: string){
        const awsUser = await Auth.confirmSignUp(username, code);

    }
    async  resendConfirmationCode(username: string) {
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
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
