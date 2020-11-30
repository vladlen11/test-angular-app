import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {BlogModel} from '../models/blog';
import {BlogCategoryModel} from '../models/BlogCategory';


@Injectable({
    providedIn: 'root',
})
export class BlogService {

    from: number = 0;
    to: number = 5;

    category_id: number;

    mainUrl: string = 'https://cms.cryptochief.net/api/front/blog_posts';

    constructor(
        private http: HttpClient,
    ) {
    }

    getActualPosts(): Observable<any> {
        return this.http.get(`${this.mainUrl}?range=[${this.from},${this.to}]${ this.category_id ? '&filter={%22category_id%22:' + this.category_id + '}' : '' }`).pipe(map((response: any) => {
            return {
                data: response.data.map(item => new BlogModel(item)),
                categories: response.meta.categories.map(item => new BlogCategoryModel(item)),
                meta: response.meta
            };

        }));
    }

    getPost(slug: string): Observable<any> {
        return this.http.get(`https://cms.cryptochief.net/api/front/blog_post/${slug}`).pipe(map((response: any) => {
            return {
                data: new BlogModel(response.post)
            };

        }));
    }


}
