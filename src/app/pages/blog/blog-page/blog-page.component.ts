import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../core/services/blog.service';
import {BlogModel} from '../../../core/models/blog';
import {ActivatedRoute} from '@angular/router';
import {BlogCategoryModel} from '../../../core/models/BlogCategory';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

    private routerSub:any;

    blogPost: BlogModel[] = [];
    categories: BlogCategoryModel[] = [];



    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.blogPost = data.blogData.data;
        });
    }

}
