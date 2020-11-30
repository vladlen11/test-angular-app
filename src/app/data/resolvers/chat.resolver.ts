import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {ChatService} from '../../core/services/chat.service';
import {ChatModel} from '../../core/models/chat.models';

@Injectable({
    providedIn: 'root',
})

export class ChatResolver implements Resolve<any> {

    constructor(
        protected router: Router,
        private chatService: ChatService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {

        return this.chatService.getChat().pipe(
            map(posts => posts),
            catchError(error => {
                this.router.navigateByUrl('/', {skipLocationChange: true}).then();
                return of(null);
            })
        ) as Observable<any>;

    }

}
