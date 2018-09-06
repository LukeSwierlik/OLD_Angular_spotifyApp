import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
    constructor(private baseOptions: RequestOptions) {}

    authorize() {
        localStorage.removeItem('token');

        const client_id = '2787d1f8e189478a8f9411de5eacd25c';
        const redirect_uri = 'http://localhost:4200/';
        const authorize = `client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;

        window.location.replace(`https://accounts.spotify.com/authorize?${authorize}`);
    }

    getToken() {
        let token = localStorage.getItem('token');

        if (!token) {
            const match = window.location.hash.match(/#access_token=(.*?)&/);

            token = match && match[1];
            localStorage.setItem('token', token);
        }

        if (!token) {
            this.authorize();
        }

        this.baseOptions.headers.set('Authorization', 'Bearer ' + token);

        return token;
    }
}
