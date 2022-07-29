export class AuthenticationData {
    user: string;
    access_token: string;
    refresh_token: string;
    authorized: boolean;
    constructor(user: string, access_token: string, refresh_token: string, authorized: boolean) {
        this.user = user;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.authorized = authorized;
    }
}

export class AuthProviderData {
    auth: AuthenticationData
    updateAuth: (a: AuthenticationData) => void

    constructor(auth: AuthenticationData, updateAuth: (a: AuthenticationData) => void) {
        this.auth = auth;
        this.updateAuth = updateAuth;
    }
}