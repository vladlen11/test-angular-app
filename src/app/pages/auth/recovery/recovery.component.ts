import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.component.html',
    styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

    formGroup: FormGroup = this.fb.group({
        email: this.fb.control('', [Validators.required]),
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
