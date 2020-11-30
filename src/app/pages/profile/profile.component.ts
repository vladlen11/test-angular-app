import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray,  FormControl} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    // formGroup: FormGroup = this.fb.group({
    //     email: this.fb.control('', [Validators.required]),
    //     password: this.fb.control('', [Validators.required])
    // });

    step1: boolean = true;
    step2: boolean = false;
    step3: boolean = false;
    step4: boolean = false;
    step5: boolean = false;

    url;

    countries = [
        {
            id: 0,
            name: 'страна 0'
        },
        {
            id: 1,
            name: 'страна 1'
        },
        {
            id: 2,
            name: 'страна 2'
        },
        {
            id: 3,
            name: 'страна 3'
        },
        {
            id: 4,
            name: 'страна 4'
        },
        {
            id: 5,
            name: 'страна 5'
        },
        {
            id: 6,
            name: 'страна 6'
        },
        {
            id: 7,
            name: 'страна 7'
        }
    ];


    formGroup: FormGroup = this.fb.group({

        info: this.fb.group({

            id: this.fb.control({value: '1', disabled: true}),
            email: this.fb.control(''),
            name: this.fb.control(''),
            birthday: this.fb.control(''),
            country: this.fb.control(''),
            description: this.fb.control(''),
            // phones: new FormArray([
            //     new FormControl('qwerty123'),
            //     new FormControl('qwerty456'),
            //     new FormControl('qwerty798'),
            // ]),

        }),

        socials: this.fb.group({
            facebook: this.fb.control('', Validators.required),
            vk: this.fb.control('', Validators.required),
            twitter: this.fb.control('', Validators.required),
            instagram: this.fb.control('', Validators.required),
            githab: this.fb.control('', Validators.required),

        }),
        security: this.fb.group({
            password: this.fb.control(
                '',
                [Validators.required]
            ),
            new_password: this.fb.control(
                '',
                [Validators.required, Validators.minLength(8)]
            ),
            new_password_confirmation: this.fb.control(
                '',
                [Validators.required]
            ),
        }),
        notifications: this.fb.group({
            password: this.fb.control(
                '',
                [Validators.required]
            ),
            new_password: this.fb.control(
                '',
                [Validators.required, Validators.minLength(8)]
            ),
            new_password_confirmation: this.fb.control(
                '',
                [Validators.required]
            ),
        }),
        checkboxes: this.fb.group({
            news: [true, {updateOn: 'change'}],
            promotion: [true, {updateOn: 'change'}],
        }),


    });
    constructor(
        private fb: FormBuilder,
    ) {
    }

    ngOnInit() {
    }

    submit() {
        const data = {
            info: this.formGroup.get('info').value,
            socials: this.formGroup.get('socials').value,
            security: this.formGroup.get('security').value,
            notifications: this.formGroup.get('notifications').value,
            checkboxes: this.formGroup.get('checkboxes').value,
        };

        console.log(data, 'data');

    }


    // onSelectFile(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         var reader = new FileReader();
    //
    //         console.log(event.target);
    //         console.log(event.target.files[0]);
    //         reader.readAsDataURL(event.target.files[0]); // read file as data url
    //
    //         reader.onload = (e) => { // called once readAsDataURL is completed
    //             this.url = e.target.result;
    //         };
    //     }
    // }
    // public delete(){
    //     // this.url = null;
    // }

    nextStep(step) {

        this.step1 =false;
        this.step2 =false;
        this.step3 =false;
        this.step4 =false;
        this.step5 =false;

        if (step === 'step2') {
            this.step2 = true;
        }
        if (step === 'step3') {
            this.step3 = true;
        }
        if (step === 'step4') {
            this.step4 = true;
        }
        if (step === 'step5') {
            this.step5 = true;
        }
    }
}
