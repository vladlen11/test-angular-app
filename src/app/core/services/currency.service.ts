// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {CurrencyModel} from '../models/currency';
// import {map} from 'rxjs/internal/operators';
//
//
// @Injectable({
//     providedIn: 'root',
// })
//
// export class CurrencyService {
//
//     apiKey = '44361ebdaf59f35906bf7fff22a3e603';
//     response: any;
//     arrCurrency = [];
//
//     constructor(
//         private http: HttpClient,
//     ) {
//     }
//
//     getCurrency(): Observable<any> {
//         return this.http.get('https://api.nomics.com/v1/prices?key=' + this.apiKey).pipe(map((response: any) => response.map(item => new CurrencyModel(item))));
//     }
//
// }
