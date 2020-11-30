import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {PaywayModel} from '../models/payway';

@Injectable({
    providedIn: 'root',
})

export class PaywayService {


    constructor(
        private http: HttpClient,
    ) {
    }

    getPayway(): Observable<any> {
        return this.http.get(`https://devel.bitles.eu/api/front/payway`).pipe(map((response: any) => response.map(item => new PaywayModel (item))));
    }
}