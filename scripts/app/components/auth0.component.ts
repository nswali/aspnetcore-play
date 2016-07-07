import { Component, OnInit, AfterViewInit } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
declare var Auth0Lock;

@Component({
    template: `
        <h1>Auth0 Examples</h1>
        <div>
            <div class="form-group">
                <label for="clientId">Client ID</label>
                <input type="text" [(ngModel)]="clientId" />
            </div>
            <div class="form-group">
                <label for="domain">Domain</label>
                <input type="text" [(ngModel)]="domain" />
            </div>
            <div class="form-group">
                <label for="domain">Connections (comma separated)</label>
                <input type="text" [(ngModel)]="connections" />
            </div>
            <div class="form-group">
                <label for="domain">Scope (optional)</label>
                <input type="text" [(ngModel)]="scope" />
            </div>
        </div>
        <button (click)="login()" [disabled]="isLoggedIn()">Login</button>
        <button (click)="logout()" [disabled]="!isLoggedIn()">Logout</button>
        <div>
            {{result | json}}
        </div>
    `
})
export class Auth0ExamplesComponent implements OnInit {
    result: string = 'Not logged in';
    clientId: string;
    domain: string;
    connections: string;
    scope: string = 'openid roles app_metadata';

    constructor() { }

    ngOnInit() { 

    }

    login(): void {
        const lock = new Auth0Lock(this.clientId, this.domain);
        lock.show({
            gravatar: true,
            disableSignupAction: true,
            callbackURL: document.location.origin,
            responseType: 'token',
            closable: true,
            sso: false,
            rememberLastLogin: false,
            connections: [this.connections],
            authParams: {
                scope: this.scope
            }
        },
        (err: string, profile: string, id_token: string, access_token: string) => {
            if (err)
                this.result = err;
            else {
                this.result = profile;
                localStorage.setItem('id_token', id_token);                
                localStorage.setItem('profile', JSON.stringify(profile));                
                localStorage.setItem('access_token', access_token);
            }
        });
    }

    logout(): void {
        localStorage.clear();
        this.result = 'No logged in';
    }

    isLoggedIn(): boolean {
        return tokenNotExpired();
    }
}