import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap, retry, retryWhen, delay } from 'rxjs/operators';
import { of, throwError  } from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class AccoutService {

    constructor(private http: HttpClient) {

    }

    // tslint:disable-next-line: ban-types
    fetchAccount(): Observable<Object> {
        return this.http.get('/assets/data/account.json', {
            headers : new HttpHeaders().set('Language', 'Angular')
        });
    }

    // tslint:disable-next-line: ban-types
    sendAccountDetails(): Observable<HttpResponse<Object>> {
        return this.http.get('/assets/data/account.json?queryparamTest=123',
        { observe : 'response'});
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
            .post('/assets/data/account.json?', newAccount)
            // tslint:disable-next-line: align
            .pipe(retryWhen(err => {
                let retires = 3;
                return err
                    .pipe(delay(1000))
                    // tslint:disable-next-line: no-shadowed-variable
                    .pipe(mergeMap((err: any) => {
                        if ( retires-- > 0){
                            return   of(err);
                    // tslint:disable-next-line: align
                } else {
                    return throwError(err);
                }
            }));
    }));
    }
}
