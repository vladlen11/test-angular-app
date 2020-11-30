import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    formGroup: FormGroup = this.fb.group({
        name: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required])
    });

    formLoading: any = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    submit() {
        const data: any = this.formGroup.getRawValue();
        console.log(data, 'data');

        this.authService.register(data).subscribe(
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
