import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../page/model/api';

@Injectable()
export class ApihashService {

  constructor(private http:HttpClient) { }
  apiAPI(cal:Api){
    return this.http.get('https://www.cryptonator.com/rates/convert/?amount'+cal.amount+'&primary='+cal.crypto1+'&secondary='+cal.crypto2);
}
