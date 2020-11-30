import {Component, OnInit, ViewChild} from '@angular/core';
import {BlogModel} from '../../core/models/blog';
import {BlogService} from '../../core/services/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    blog: BlogModel[] = [];

    @ViewChild('slider') slider;

    slides = [];

    sliderConfig: any = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        adaptiveHeight: false,
        swipe: true,
        touchMove: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        swipeToSlide: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                },
            },
        ],
    };

    constructor(private blogService: BlogService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.blog = data.blogData.data;
        });

        this.getPostImage(this.blog);
    }

    getPostImage(arr) {
        let i = 0;
        arr.forEach( (item:any) => {
            if (item.thumbnail_image) {
                this.slides.push(
                    {
                        id: i,
                        img: item.thumbnail_image.src
                    }
                );
                i++;
            }

        });

        console.log(this.slides);
    }

}
