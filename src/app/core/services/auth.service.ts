import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {UserModel} from '../models/user.models';
import {JwtTokenService} from './jwt-token.service';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/internal/operators';

export interface AuthData {
    token: string;
    permissions: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    loginEvent: Subject<any>;
    authEvent: BehaviorSubject<any>;
    isLogin = new EventEmitter<void>();

    private readonly apiUrl = environment.api.baseUrl;

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorageService,
        private jwtService: JwtTokenService,
        private router: Router,
    ) {

    }

    get isSigned(): boolean {
        return !!(this.jwtService.token || false);
    }


    login(params): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/login`, params).pipe(
            tap((authData: AuthData) => {
                this.setAuthData(authData.token, authData.permissions);
                this.router.navigateByUrl('/account').then();
            })
        );
    }


    logout(params = true) {
        this.http.post(`${this.apiUrl}/auth/logout`, params)
            .subscribe(() => {
                this.clearAuthData();
                this.router.navigateByUrl('/auth').then();
            });
    }

    register(params): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/register`, params).pipe(
            tap(() => {
                this.router.navigateByUrl('/').then();
            })
        );
    }

    resetPassword(params): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/password/forgot`, params).pipe(
            tap((authData: AuthData) => {
                this.router.navigateByUrl('/auth').then();
            })
        );
    }


    private setAuthData(token, permissions) {
        this.jwtService.setToken(token);
        this.jwtService.setPermissions(permissions);
    }

    clearAuthData(navigate?: boolean) {
        this.jwtService.clearToken();
        this.jwtService.clearPermissions();

        if (navigate) {
            this.router.navigateByUrl('/auth').then();
        }
    }

}