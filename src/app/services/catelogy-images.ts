import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CatelogyImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatelogyImagesProvider {

  constructor(public httpClient: HttpClient) {}

  getData(url){
    return this.httpClient.get(
        url, 
        {responseType: 'text'}
    );
}
}
