// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {BlogService} from '../core/services/blog.service';
// import {ActivatedRoute} from '@angular/router';
// import {PaywayResolver} from '../data/resolvers/payway.resolver';
// import {PaywayService} from '../core/services/payway.service';
//
// @Component({
//     selector: 'app-form-test',
//     templateUrl: './form-test.component.html',
//     styleUrls: ['./form-test.component.scss']
// })
// export class FormTestComponent implements OnInit {
//
//
//     data = [];
//
//     submitted = false;
//
//     countries = [
//         {
//             id: '1',
//             name: 'страна 1'
//         },
//         {
//             id: '2',
//             name: 'страна 2'
//         },
//         {
//             id: '3',
//             name: 'страна 3'
//         },
//         {
//             id: '4',
//             name: 'страна 4'
//         }
//     ];
//
//     formGroup: FormGroup = this.fb.group({
//
//         info:  this.fb.group({
//
//             firstName: this.fb.control(''),
//             lastName: this.fb.control(''),
//             patronymicName: this.fb.control(''),
//             phones: new FormArray([
//                 new FormControl('qwerty123'),
//                 new FormControl('qwerty456'),
//                 new FormControl('qwerty798'),
//             ]),
//             email: this.fb.control(''),
//         }),
//
//         auth: this.fb.group({
//                 password: this.fb.control('', Validators.required),
//                 confirmPass: this.fb.control('', Validators.required)
//         }, {validator: this.checkPasswords }),
//
//         all: this.fb.group({
//             selectInput: this.fb.control(''),
//             fileInput: this.fb.control(''),
//             payways: new FormArray([
//
//             ])
//         }),
//
//
//     });
//
//
//     constructor(
//         private fb: FormBuilder,
//         private route: ActivatedRoute,
//         private paywayService: PaywayService
//     ) {
//     }
//
//     ngOnInit() {
//         this.route.data.subscribe(data => {
//             this.data = data.paywayData;
//             this.addPaywayArr(this.data);
//         });
//     }
//
//     //
//     addPhoneControl() {
//         (this.formGroup.get('info').get('phones') as FormArray).push(new FormControl(''));
//     }
//
//     removePhoneControl(index) {
//         (this.formGroup.get('info').get('phones') as FormArray).removeAt(index);
//     }
//
//     addPaywayArr(arr) {
//         arr.forEach((item, index) => {
//             this.getPaywayArr.push(new FormControl( ''));
//         });
//
//     }
//
//     get getPaywayArr(): FormArray {
//         return this.formGroup.get('all').get('payways') as FormArray;
//     }
//
//     checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//         // const pass = group.get('auth').get('password').value;
//         // console.log(pass, 'pass');
//         // const confirmPass = group.get('auth').get('confirmPass').value;
//         //
//         // return pass === confirmPass ? null : { notSame: true };
//         // console.log(pass === confirmPass ? null : { notSame: true });
//     }
//     // onSubmit() {
//     //     const data = {
//     //         info: this.formGroupInfo.value,
//     //         auth: this.formGroupAuth.value,
//     //         all: this.formGroupAll.value
//     //     };
//     //
//     //     console.log(data, 'data');
//     //
//     // }
// }
