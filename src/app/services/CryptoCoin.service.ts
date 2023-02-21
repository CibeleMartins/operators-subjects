import { map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface CryptoInfo {
    symbol: string,
    name: string,
    buyValue: number,
    priceVariationPercentage: string
}

@Injectable({ providedIn: 'root' })
export class CryptoCoinService {


    public cryptosInfos: any[] = [];
    private crypto!: CryptoInfo;

    constructor(private http: HttpClient) { }

    getCryptoInfos() {
        return this.http.get('https://api1.binance.com/api/v3/ticker/24hr').pipe(map((i) => {
            Object.values(i).filter((i) => i.symbol.includes('BRL') ? i : '').map((i) => {
                this.cryptosInfos.push(this.crypto = { symbol: '', name: i.symbol, buyValue: i.bidPrice, priceVariationPercentage: i.priceChangePercent })
            })
            return this.cryptosInfos
        }))
    }

}