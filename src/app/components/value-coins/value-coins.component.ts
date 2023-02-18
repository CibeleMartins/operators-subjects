import { Component } from '@angular/core';
import { CoinPrice, CoinService } from 'src/app/services/CoinService.service';

@Component({
  selector: 'app-value-coins',
  templateUrl: './value-coins.component.html',
  styleUrls: ['./value-coins.component.scss']
})
export class ValueCoinsComponent {

  coins: CoinPrice[] | undefined;

  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.coinService.getCurrencyQuote().subscribe({
      next: (data) => { this.coins = data, console.log(this.coins) },
      error: (e) => console.error(e),
      complete: () => console.info('Requisição feita com sucesso!') 
  })}


}
