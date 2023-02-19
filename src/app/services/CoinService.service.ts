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
export class CoinService {

    private usd!: CoinPrice;
    private eur!: CoinPrice;
    private btc!: CoinPrice;

    constructor(private http: HttpClient) { }

    getCurrencyQuote() {
        return this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').pipe(map((data: any) => {
            return [this.usd = {
                code: data.USDBRL.code,
                highPrice: parseFloat(parseFloat(data.USDBRL.high).toFixed(2)),
                lowPrice: parseFloat(parseFloat(data.USDBRL.low).toFixed(2)),
                percentageVariation: parseFloat(data.USDBRL.pctChange),
                saleValue: parseFloat(parseFloat(data.USDBRL.ask).toFixed(2)),
                buyValue: parseFloat(parseFloat(data.USDBRL.bid).toFixed(2))
            },

            this.eur = {
                code: data.EURBRL.code,
                highPrice: parseFloat(parseFloat(data.EURBRL.high).toFixed(2)),
                lowPrice: parseFloat(parseFloat(data.EURBRL.low).toFixed(2)),
                percentageVariation: parseFloat(data.EURBRL.pctChange),
                saleValue: parseFloat(parseFloat(data.EURBRL.ask).toFixed(2)),
                buyValue: parseFloat(parseFloat(data.EURBRL.bid).toFixed(2))
            },

            this.btc = {
                code: data.BTCBRL.code,
                highPrice: parseFloat(parseFloat(data.BTCBRL.high).toFixed(2)),
                lowPrice: parseFloat(parseFloat(data.BTCBRL.low).toFixed(2)),
                percentageVariation: parseFloat(data.BTCBRL.pctChange),
                saleValue: parseFloat(parseFloat(data.BTCBRL.ask).toFixed(2)),
                buyValue: parseFloat(parseFloat(data.BTCBRL.bid).toFixed(2))
            }]
        }))


    }

    getLegendCoins() {
        return this.http.get('https://api.frankfurter.app/currencies').pipe(map((data) => {
            return Object.entries(data).map((i) => i[0])
        }))
    }


    convertCoins(valueCoin: number, coinBase: string, coinConversion: string) {

        return this.http.get(`https://api.frankfurter.app/latest?amount=${valueCoin}&from=${coinBase}&to=${coinConversion}`).pipe(map(data => {
            let result = Object.values(data)[3]
            return parseFloat(Object.values(result).toString()).toFixed(2)
        }))
    }
}