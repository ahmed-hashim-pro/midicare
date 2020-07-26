import { Auth } from 'aws-amplify';
import { User } from '@authorization/auth/user';
import {IAUTH} from '@authorization/auth/iauth';
// Auth is pre-configured in the Application Root
// before hand for all AWS AMPLIFY Services
export default class CognitoAmplify implements IAUTH {
    constructor() {
    }

    public async getUser () : Promise<User> {
        const awsUser = await Auth.currentAuthenticatedUser();
        return this.toUser(awsUser);
    }

    public async signIn (username: string, password: string) : Promise<User> {
        const awsUser = await Auth.signIn(username, password);
        return this.toUser(awsUser);
    }

    public async signOut () : Promise<User> {
        await Auth.signOut();
        return new User(null, null, {});
    }

    signUp(username: string, password: string, opts: object): Promise<User> {
        // NO OP operation
        return Promise.resolve(new User(null, null, {}));
    }

    // NO OP
    // TODO: Add the update user capabilities
    public async updateUser (user : User) : Promise<User> {
        return new User(null, null, {});
    }

    // Auxillary functions
    private toUser (awsUser : any) : User {
        return new User(
            awsUser.username,
            awsUser.getSignInUserSession().getAccessToken().payload['cognito:groups'],
            awsUser.attributes
        );
    }
}
