import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {BlogComponent} from './blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogResolver} from '../../data/resolvers/blog.resolver';


const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        data: {
            slug: 'general'
        },
        children: [
            {
                path: '',
                component: BlogListComponent,
                data: {
                    slug: 'blog-list'
                },
                resolve: {
                    blogData: BlogResolver,
                },
            },
            {
                path: ':slug',
                component: BlogPageComponent,
                data: {
                    slug: 'blog-page'
                },
                resolve: {
                    blogData: BlogResolver,
                },
            },

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class BlogRoutingModule {
}
