import { Component } from '@angular/core';
import { CoinService } from 'src/app/services/CoinService.service';

@Component({
  selector: 'app-value-coins',
  templateUrl: './value-coins.component.html',
  styleUrls: ['./value-coins.component.scss']
})
export class ValueCoinsComponent {

  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.coinService.getCurrencyQuote()
  }
}
