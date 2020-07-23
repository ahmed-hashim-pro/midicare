/**
 * The user class 'mainly returned by the authorization service only'
 * The user class should not be constructed outside authorization services under any means
 */
export class User {
    private _username : string;
    private _groups : [string];
    private _attributes : object;

    constructor(username: string, groups: [string], attributes: object = {}) {
        this._username = username;
        this._groups = groups;
        this._attributes = attributes;
    }


    get attributes(): object {
        return this._attributes;
    }

    set attributes(value: object) {
        this._attributes = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get groups(): [string] {
        return this._groups;
    }

    set groups(value: [string]) {
        this._groups = value;
    }

    addGroup (group: string) {
        this._groups.push(group);
    }

    removeGroup (group: string) {
        this._groups.filter(
            current => current !== group
        )
    }

    belongsToGroup (group: string) : boolean {
        return this._groups.includes(group);
    }
}
