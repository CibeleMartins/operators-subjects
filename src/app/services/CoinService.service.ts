import { map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface CoinPrice {
    code: string,
    highPrice: number,
    lowPrice: number
}

@Injectable({ providedIn: 'root' })
export class CoinService {

    private usd!: CoinPrice;
    private eur!: CoinPrice;
    private btc!: CoinPrice;

    constructor(private http: HttpClient) { }

    getCurrencyQuote() {
        return this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').pipe(map((data: any) => {
            return [this.usd = {
                code: data.USDBRL.code,
                highPrice: parseFloat(data.USDBRL.high),
                lowPrice: parseFloat(data.USDBRL.low)
            },

            this.eur = {
                code: data.EURBRL.code,
                highPrice: parseFloat(data.EURBRL.high),
                lowPrice: parseFloat(data.EURBRL.low)
            },

            this.btc = {
                code: data.BTCBRL.code,
                highPrice: parseFloat(data.BTCBRL.high),
                lowPrice: parseFloat(data.BTCBRL.low)
            }]
        }))

    }
}