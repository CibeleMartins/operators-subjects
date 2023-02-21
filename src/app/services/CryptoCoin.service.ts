import { map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface CoinPrice {
    code: string,
    highPrice: number,
    lowPrice: number,
    percentageVariation: number,
    saleValue: number,
    buyValue: number
}


@Injectable({ providedIn: 'root' })
export class CryptoCoinService {

    constructor(private http: HttpClient) { }

   getCryptoInfos() {
    return this.http.get('https://api1.binance.com/api/v3/ticker/24hr').pipe(map((i)=> {
        console.log(i)
    }))
   }
   

    
}