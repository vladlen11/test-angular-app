import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BlogService } from '../../core/services/blog.service';
import { BlogModel } from '../../core/models/blog';

@Injectable({
    providedIn: 'root',
})

export class BlogResolver implements Resolve<any> {

    constructor(
        protected router: Router,
        private blogService: BlogService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        const slug: string = route.params.slug || null;

        if (slug) {
            return this.blogService.getPost(slug).pipe(
                map(post => post),
                catchError(error => {
                    this.router.navigateByUrl('/', {skipLocationChange: true}).then();
                    return of(null);
                })
            ) as Observable<BlogModel>;
        } else {
            return this.blogService.getActualPosts().pipe(
                map(posts => posts),
                catchError(error => {
                    this.router.navigateByUrl('/', {skipLocationChange: true}).then();
                    return of(null);
                })
            ) as Observable<any>;
        }
    }

}
