// import {Component, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {CurrencyService} from '../core/services/currency.service';
// import {CurrencyModel} from '../core/models/currency';
//
// @Component({
//     selector: 'app-converter',
//     templateUrl: './converter.component.html',
//     styleUrls: ['./converter.component.scss']
// })
// export class ConverterComponent implements OnInit {
//
//     convert: number;
//     response: any;
//
//
//     arrCurrency: any;
//     currencyPrice = 0;
//     inputTitle: string;
//
//     btnRight: number;
//
//     amountFrom;
//     amountTo;
//
//     constructor(private http: HttpClient,
//                 private currencyService: CurrencyService) {
//
//     }
//
//     ngOnInit() {
//         // this.getCurrencyArr();
//     }
//
//     // getCurrencyArr() {
//     //     this.currencyService.getCurrency().subscribe( response => {
//     //         console.log(response);
//     //
//     //         this.arrCurrency = response;
//     //
//     //     });
//     // }
//     //
//     // choiceCurrency(item) {
//     //     this.inputTitle = `currency: ${item.currency} ,<br> price =  ${item.price}`;
//     //     // this.inputTitle = 'currency: '  + item.currency + ', <br>' +'price = ' + item.price
//     //     this.currencyPrice = item.price;
//     // }
//     //
//     // activeBtn(id) {
//     //     this.btnRight = id;
//     // }
//     //
//     // onInputChange() {
//     //     if (this.amountFrom) {
//     //         this.amountTo = this.amountFrom *  this.currencyPrice;
//     //     } else {
//     //         this.amountFrom = this.amountTo / this.currencyPrice;
//     //     }
//     // }
//     //
//     // clear () {
//     //     this.amountFrom = '';
//     //     this.amountTo = '';
//     // }
//
// }
