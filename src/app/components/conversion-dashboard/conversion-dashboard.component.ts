import { Component } from '@angular/core';
import { CoinService } from 'src/app/services/CoinService.service';

@Component({
  selector: 'app-conversion-dashboard',
  templateUrl: './conversion-dashboard.component.html',
  styleUrls: ['./conversion-dashboard.component.scss']
})
export class ConversionDashboardComponent {

  coinsConversionOption!: string[];
  displayConverter!: boolean;
  selectedCoinBase: string = 'BRL';
  selectedCoinConversion: string = 'USD'
  valueCoin!: string;

  constructor(private coinService: CoinService) {}

  ngOnInit( ) {

    console.log(this.selectedCoinBase)
    this.coinService.getLegendCoins().subscribe({
      next: (data) => {console.log(data), this.coinsConversionOption = data },
      error: (e) => console.error(e),
      complete: () => console.info('Requisição feita com sucesso!') 
    })
  }

  showConverter() {

    this.displayConverter = true;
  }

  convert(valueCoin: string, coinBase: string, coinConversion: string) {
    console.log(valueCoin, coinBase, coinConversion)
  }
}
