import {Component, OnInit} from '@angular/core';
import {BlogModel} from '../../core/models/blog';
import {BlogService} from '../../core/services/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    blog: BlogModel[] = [];

    slides = [];

    activeSlidIndex = 1;

    modal = false;
    carousel1;
    carousel2;
    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.blog = data.blogData.data;
        });

        this.getPostImage(this.blog);


        setTimeout(() => {

            this.slider1(1);

        }, 1000);


    }

    getPostImage(arr) {
        let i = 0;
        arr.forEach((item: any) => {
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

    slider1(e) {
        this.carousel1 = document.getElementsByClassName('carousel__item') as any;
        if (e > this.carousel1.length) {
            this.activeSlidIndex = 1;
        }

        if (e < 1) {
            this.activeSlidIndex = this.carousel1.length;
        }

        for (let i = 0; i < this.carousel1.length; i++) {
            this.carousel1[i].style.display = 'none';
        }

        this.carousel1[this.activeSlidIndex - 1].style.display = 'block';
    }
    slider2(e) {
        this.carousel2 = document.getElementsByClassName('carousel2__item') as any;
        console.log(e, ' this.carousel2');
        if (e > this.carousel2.length) {
            this.activeSlidIndex = 1;
        }

        if (e < 1) {
            this.activeSlidIndex = this.carousel2.length;
        }

        for (let i = 0; i < this.carousel2.length; i++) {
            this.carousel2[i].style.display = 'none';
        }

        this.carousel2[this.activeSlidIndex - 1].style.display = 'block';
    }
    changeSlide(e) {
        this.activeSlidIndex += e;
        this.slider1(this.activeSlidIndex);
    }

    openModal(indexSlide) {
        this.modal = true;

        setTimeout(() => {

            this.slider2(indexSlide);

        }, 100);
    }

    closeModal() {
        this.modal = false;
    }

    changeSlideModal(e) {
        this.activeSlidIndex += e;
        this.slider2(this.activeSlidIndex);
    }


}
