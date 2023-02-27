import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiDataService {

  constructor(private httpClient: HttpClient) { }

  getExchangeConverterData(currency1: string){
    let url = 'https://api.exchangerate.host/latest?base=' + currency1;
    return this.httpClient.get(url)

  }
}
