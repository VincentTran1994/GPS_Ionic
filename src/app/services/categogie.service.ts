import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable()
export class CategogieService{
    constructor(private httpClient: HttpClient){

    }

    getData(){
        return this.httpClient.get(
            "http://www.nailspadesigns.com/ecatalog", 
            {responseType: 'text'}
        );
    }
}