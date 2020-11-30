import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;


    constructor(
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
        console.log(this.authService.isSigned, 'isSigned');
    }

    logout() {
        if (this.authService.isSigned) {
            this.authService.logout();
        }
    }

}
