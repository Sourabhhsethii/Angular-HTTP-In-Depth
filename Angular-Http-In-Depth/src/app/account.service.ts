import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccoutService{

    constructor(private http: HttpClient){

    }

    // tslint:disable-next-line: ban-types
    fetchAccount(): Observable<Object> {
        return this.http.get('/assets/data/account.json');
    }

}