import {User} from "./user";

/**
 * Authentication and authorization interface to be used all over
 * the application.
 * The interface represents the strategy of the 'Identity Server' with
 * the application client, the application client must adhere to the
 * specification on this interface all the time, to allow portability to
 * different 'Identity Server' in future
 */
export interface IAUTH {
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
