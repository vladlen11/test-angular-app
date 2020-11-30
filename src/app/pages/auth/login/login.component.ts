import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';


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

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
    ) {
    }

    ngOnInit() {
    }

    submit() {
        const data: any = this.formGroup.getRawValue();
        console.log(data, 'data');

        return this.authService.login(data);

    }

}
