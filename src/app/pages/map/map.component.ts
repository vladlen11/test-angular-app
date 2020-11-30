import { Component, Input, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { mapStyles } from './map-styles';
// import {} from '@types/googlemaps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @ViewChild('section') section: ElementRef;
    data = [
        {
            map_latitude: 51.678418,
            map_longitude: 7.809007
        }
    ];

    public isOnScreen = false;

    windowWidth = 0;

    mapStyles = mapStyles;

    constructor() {
        this.windowWidth = window.innerWidth;
    }

    ngOnInit() {
        this.checkOnScreen();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
    }

    checkOnScreen() {
        if (
            this.section &&
            pageYOffset > this.section.nativeElement.offsetTop - window.innerHeight &&
            pageYOffset < this.section.nativeElement.offsetTop + this.section.nativeElement.offsetHeight
        ) {
            this.isOnScreen = true;
        } else {
            this.isOnScreen = false;
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        this.checkOnScreen();
    }

}
