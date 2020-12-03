import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from './pages.component';
import {ConverterComponent} from './converter/converter.component';
import {PaywayResolver} from '../data/resolvers/payway.resolver';
import {HomeComponent} from './home/home.component';
import {MapComponent} from './map/map.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LocalizationComponent} from './localization/localization.component';
import {ProfileComponent} from './profile/profile.component';
import {VisualizationComponent} from './visualization/visualization.component';
import {ChatComponent} from './chat/chat.component';
import {BlogResolver} from '../data/resolvers/blog.resolver';
import {ChatResolver} from '../data/resolvers/chat.resolver';
import {SliderComponent} from './slider/slider.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        data: {
            slug: 'general'
        },
        children: [
            {
                path: '',
                component: HomeComponent,
                data: {
                    slug: 'home'
                },
            },
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule),
                data: {
                    slug: 'auth'
                },
            },
            {
                path: 'blog',
                loadChildren: () => import('./blog/blog.module').then((mod) => mod.BlogModule),
                data: {
                    slug: 'blog'
                },
            },
            {
                path: 'converter',
                component: ConverterComponent,
                data: {
                    slug: 'converter'
                },
                resolve: {
                    paywayData: PaywayResolver,
                },
            },
            {
                path: 'map',
                component: MapComponent,
                data: {
                    slug: 'map'
                },
            },
            {
                path: 'gallery',
                component: GalleryComponent,
                data: {
                    slug: 'gallery'
                },
                resolve: {
                    blogData: BlogResolver,
                },
            },
            {
                path: 'localization',
                component: LocalizationComponent,
                data: {
                    slug: 'localization'
                },
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: {
                    slug: 'profile'
                },
            },
            {
                path: 'visualization',
                component: VisualizationComponent,
                data: {
                    slug: 'visualization'
                },
            },
            {
                path: 'chat',
                component: ChatComponent,
                data: {
                    slug: 'chat'
                },
                resolve: {
                    chatData: ChatResolver,
                },
            },
            {
                path: 'slider',
                component: SliderComponent,
                data: {
                    slug: 'slider'
                },
                resolve: {
                    blogData: BlogResolver,
                },
            }
            // {
            //     path: '**',
            //     redirectTo: '404'
            // },

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
