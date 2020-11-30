import {Component, OnInit} from '@angular/core';
import {BlogModel} from '../../../core/models/blog';
import {BlogService} from '../../../core/services/blog.service';
import {BlogCategoryModel} from '../../../core/models/BlogCategory';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {


    meta = [];
    totalPage: number;
    postStep = 6;

    latestPosts: BlogModel[] = [];
    blog: BlogModel[] = [];
    categories: BlogCategoryModel[] = [];

    currentPage: number;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.blog = data.blogData.data;
            this.categories = data.blogData.categories;
            this.meta = data.blogData.meta;
            console.log( this.blog , 'blog');
            console.log( this.categories , 'categories');
            console.log( this.meta , 'meta');
        });
        this.pagination();

        // console.log(this.route.data);
    }

    getCurrencyArr() {
        this.blogService.getActualPosts().subscribe(response => {
            console.log(response);
            this.blog = response.data;
            this.categories = response.categories;
            this.meta = response.meta;
            this.totalPage = response.meta.last_page;
            this.currentPage = response.meta.current_page;
            console.log( this.totalPage, 'totalPage');
        });
    }

    changeCategories(id) {
        this.blogService.category_id = id;
        this.getCurrencyArr();
    }

    allCategory() {
        this.blogService.category_id = 0;
        this.getCurrencyArr();
    }


    nextPagination() {
        this.blogService.from = this.blogService.from + this.postStep;
        this.blogService.to = this.blogService.to + this.postStep;
        this.getCurrencyArr();

    }

    prevPagination() {

        if (this.blogService.from >= 0) {
            this.blogService.from = this.blogService.from - this.postStep;
            this.blogService.to = this.blogService.to - this.postStep;
            this.getCurrencyArr();
        }

    }


    createPagination() {
        for (let i = 0; i >= this.totalPage; i++) {

        }
    }

    getCurrentPage(number) {
        console.log(number, 'number');

        if (number === 1 ) {
            this.blogService.from = 1;
            this.blogService.to = 6;
        } else if (number === 2) {
            this.blogService.from = 6 ;
            this.blogService.to = 11;
        }
    }

    pagination() {
        this.blogService.getActualPosts().subscribe(response => {
            this.totalPage = response.meta.last_page;
            this.currentPage = response.meta.current_page;
        });

    }


}
