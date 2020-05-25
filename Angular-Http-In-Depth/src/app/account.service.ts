import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccoutService {

    constructor(private http: HttpClient) {

    }

    // tslint:disable-next-line: ban-types
    fetchAccount(): Observable<Object> {
        return this.http.get('/assets/data/account.json');
    }

    // tslint:disable-next-line: ban-types
    sendAccountDetails(): Observable<Object> {
        return this.http.get('/assets/data/account.json?queryparamTest=123');
    }
    // Get Request Handled
    // tslint:disable-next-line: ban-types
    sendAccountDetailsQueryParams(): Observable<Object> {
        return this.http
            .get('/assets/data/account.json?', {
                params: new HttpParams().set('id', '123')
            });
    }
    // tslint:disable-next-line: ban-types
    sendAccountDetailsPostParamsHandled(): Observable<Object> {

        const newAccount = {
            name: 'Sourabh'
        };
        return this.http
            .post('/assets/data/account.json?', newAccount);
    }
}
