import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseAppConfig } from 'angularfire2';

export class Configs {

    static firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        storageBucket: "",
        messagingSenderId: ""
    };

}