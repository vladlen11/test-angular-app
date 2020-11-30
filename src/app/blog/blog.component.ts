// import {Component, OnInit} from '@angular/core';
// import { ActivatedRoute } from '@angular/router'
// import {BlogService} from '../core/services/blog.service';
// import {BlogModel} from '../core/models/blog';
// import {BlogCategoryModel} from '../core/models/BlogCategory';
//
// @Component({
//     selector: 'app-blog',
//     templateUrl: './blog.component.html',
//     styleUrls: ['./blog.component.scss']
// })
// export class BlogComponent implements OnInit {
//
//
//     meta = [];
//     totalPage: number;
//     postStep = 6;
//
//     latestPosts: BlogModel[] = [];
//     blog: BlogModel[] = [];
//     categories: BlogCategoryModel[] = [];
//
//     constructor(
//         private blogService: BlogService,
//         private route: ActivatedRoute
//         ) {
//     }
//
//     ngOnInit() {
//         this.route.data.subscribe(data => {
//             this.blog = data.blogData.data;
//             this.categories = data.blogData.categories;
//             this.meta = data.blogData.meta;
//             console.log( data , 'blog');
//         });
//
//         // console.log(this.route.data);
//     }
//
//     getCurrencyArr() {
//         // this.blogService.getActualPosts().subscribe(response => {
//         //     console.log(response);
//         //     this.blog = response.data;
//         //     this.categories = response.categories;
//         //     this.meta = response.meta;
//         //     this.totalPage = response.meta.last_page;
//         //     console.log( this.totalPage, 'totalPage');
//         // });
//     }
//
//     // changeCategories(id) {
//     //     this.blogService.category_id = id;
//     //     this.getCurrencyArr();
//     // }
//     //
//     // allCategory() {
//     //     this.blogService.category_id = 0;
//     //     this.getCurrencyArr();
//     // }
//     //
//     // createPagination() {
//     //     for (let i = 0; i >= this.totalPage; i++) {
//     //
//     //     }
//     // }
//     //
//     // nextPagination() {
//     //     this.blogService.from = this.blogService.from + 6;
//     //     this.blogService.to = this.blogService.to + 6;
//     //     this.getCurrencyArr();
//     //
//     // }
//     //
//     // prevPagination() {
//     //
//     //     if (this.blogService.from >= 0) {
//     //         this.blogService.from = this.blogService.from - 6;
//     //         this.blogService.to = this.blogService.to - 6;
//     //         this.getCurrencyArr();
//     //     }
//     //
//     // }
//     //
//     // pagination(number) {
//     //     if (number === 1) {
//     //         this.blogService.from = 0;
//     //         this.blogService.to = 5;
//     //     } else {
//     //
//     //         this.blogService.from = this.blogService.from + 6;
//     //         this.blogService.to = this.blogService.to + 6;
//     //     }
//     //
//     //
//     //     this.getCurrencyArr();
//     //
//     // }
//
// }
