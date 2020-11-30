import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class JwtTokenService {

    private readonly expires = 0;

    constructor(
        private localStorageService: LocalStorageService
    ) {
        // if (this.token) {
        //     this.expires = this.parseJwtToken().exp || 0;
        // }
    }

    get token(): string {
        return this.localStorageService.getItem('token');
    }

    get permissions(): string {
        return this.localStorageService.getItem('permissions');
    }

    get isExpired(): boolean {
        const now = Math.round(new Date().getTime() / 1000);

        return now >= this.expires;
    }

    setToken(token: string) {
        return this.localStorageService.setItem('token', token);
    }

    setPermissions(permissions: string) {
        return this.localStorageService.setItem('permissions', permissions);
    }

    clearToken() {
        return this.localStorageService.removeItem('token');
    }

    clearPermissions() {
        return this.localStorageService.removeItem('permissions');
    }

    private parseJwtToken(): any {
        const base64Url = this.token.split('.')[1];
        const base64 = decodeURIComponent(
            atob(base64Url)
                .split('')
                .map(c => (
                    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                ))
                .join('')
        );

        return JSON.parse(base64);
    }

}
