import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './../rxjs-operators';

@Injectable()
export class ResourceService {

    constructor(public _http: Http) {         
    }

    public get(): Observable<string> {
        const url = 'api/service';
        return this._http
            .get(url)
            .map(res => res.text())
            .catch(err => Observable.throw(err));            
    }
}