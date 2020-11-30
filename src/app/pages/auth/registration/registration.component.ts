import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

    constructor(
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
    }

    submit() {
        const data: any = this.formGroup.getRawValue();
        console.log(data, 'data');
    }

}
