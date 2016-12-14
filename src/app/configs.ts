import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export class Configs {

    static firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        storageBucket: "",
        messagingSenderId: ""
    };

    static authConfig = {
        provider: AuthProviders.Google,
        method: AuthMethods.Redirect
    }

}