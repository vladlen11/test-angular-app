import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formGroup: FormGroup = this.fb.group({
        email: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required])
    });


    formLoading: any = false;

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    submit() {
        const data: any = this.formGroup.getRawValue();
        console.log(data, 'data');

        this.authService.login(data).subscribe(
            response => {
                this.formGroup.reset();
                this.router.navigateByUrl('/');
                this.formLoading = false;
            },
            (response: any) => {
                this.formLoading = false;
            });

    }

}
