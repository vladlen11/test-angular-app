import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../../theme/theme.module';
import {BlogComponent} from './blog.component';
import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
    declarations: [
        BlogComponent,
        BlogPageComponent,
        BlogListComponent
    ],
    imports: [
        CommonModule,
        ThemeModule,
        FormsModule,
        ReactiveFormsModule,
        BlogRoutingModule
    ]
})
export class BlogModule {
}
