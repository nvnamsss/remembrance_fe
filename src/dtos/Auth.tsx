export class AuthenticationData {
    roles: number[];
    user: string;
    constructor() {
        this.roles = [];
        this.user = "";
    }
}

export class AuthProviderData {
    auth: AuthenticationData
    setAuth: undefined | React.Dispatch<React.SetStateAction<AuthenticationData>>

    constructor(auth: AuthenticationData, setAuth: undefined|React.Dispatch<React.SetStateAction<AuthenticationData>>) {
        this.auth = auth;
        this.setAuth = setAuth;
    }
}