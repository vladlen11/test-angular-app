import { Injectable } from '@angular/core';
import { CoreService } from './core.service';

@Injectable({
    providedIn: 'root',
})

export class LocalStorageService {

    constructor(private coreService: CoreService) {
    }

    getItem(key: string) {
        console.log(key, 'getItem' );
        if (!this.coreService.isBrowser) {
            return;
        }
        const value = localStorage.getItem(key);
        let json: any;
        try {
            json = JSON.parse(value);
        } catch (e) {
        }

        return json || value;
    }

    setItem(key: string, value: any): void {
        console.log(key, value, 'setItem' );
        if (!this.coreService.isBrowser) {
            return;
        }
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
    }

    removeItem(key: string) {
        if (!this.coreService.isBrowser) {
            return;
        }
        localStorage.removeItem(key);
    }

    clear() {
        if (!this.coreService.isBrowser) {
            return;
        }
        localStorage.clear();
    }
}
