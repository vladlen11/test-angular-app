import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import {PaywayModel} from '../../core/models/payway';
import {PaywayService} from '../../core/services/payway.service';

@Injectable({
    providedIn: 'root',
})

export class PaywayResolver implements Resolve<any> {

    constructor(
        protected router: Router,
        private paywayService: PaywayService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        return this.paywayService.getPayway().pipe(
            map(posts => posts),
            catchError(error => {
                this.router.navigateByUrl('/', {skipLocationChange: true}).then();
                return of(null);
            })
        ) as Observable<any>;
    }

}
