import {Component, OnInit} from '@angular/core';
import {PaywayModel} from '../../core/models/payway';
import {BlogService} from '../../core/services/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

    payway: any;
    rates = [];
    selectedCurrencyFrom: number = 26;
    selectedCurrencyTo: number = 1;


    currencyFrom: number;
    currencyTo: number;

    inputFrom;
    inputTo;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.payway =  data.paywayData;
        });

        this.createPaywayArr(this.payway.rates);

        this.initSelect();
    }

    createPaywayArr(arr) {

        let i = 0;

        for (let key in arr) {
            this.rates.push({
                id: i,
                code: key,
                currency: arr[key]
            });

            i++;
        };
    }

    initSelect() {
        this.rates.forEach((item) => {
            // console.log(item, 'item');
            if (item.id === this.selectedCurrencyFrom) {
                this.currencyFrom = item.currency;
            }

            if (item.id === this.selectedCurrencyTo) {
                this.currencyTo = item.currency;
            }
        });
    }

    selectCurrencyFrom(from) {
        this.currencyFrom = from.currency;
        this.inputFrom =  this.inputTo *  this.currencyFrom / this.currencyTo;
    }

    selectCurrencyTo(to) {
        this.currencyTo = to.currency;
        this.inputTo = this.inputFrom * this.currencyTo / this.currencyFrom;

    }

    onInputChange(changeFrom) {
        if (changeFrom) {
            if (this.inputTo === '') {
                this.inputFrom = '';
            } else {
                this.inputTo = this.inputFrom * this.currencyTo / this.currencyFrom;
            }

        } else {
            console.log(this.inputFrom.length, 'this.inputFrom');
            if (this.inputFrom === '') {
                this.inputTo = '';
            } else {
                this.inputFrom =  this.inputTo *  this.currencyFrom / this.currencyTo;
            }
        }
    }



    clear () {
        this.inputFrom = '';
        this.inputTo = '';
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }

}
