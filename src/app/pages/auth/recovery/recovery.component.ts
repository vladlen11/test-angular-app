import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.component.html',
    styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

    formGroup: FormGroup = this.fb.group({
        email: this.fb.control('', [Validators.required]),
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

        this.authService.resetPassword(data).subscribe(
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
