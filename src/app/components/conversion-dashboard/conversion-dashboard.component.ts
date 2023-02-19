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
  conversionResult!: string;

  result!: string;
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getLegendCoins().subscribe({
      next: (data) => { this.coinsConversionOption = data },
      error: (e) => console.error(e),
      complete: () => console.info('Requisição feita com sucesso!')
    })
  }

  showConverter() {
    this.displayConverter = true;
  }

  convert(valueCoin: string, coinBase: string, coinConversion: string) {
    console.log(parseFloat(valueCoin), coinBase, coinConversion)

    // acho que aqui poderia tirar essa linha do next e fazer iddo no operador
    this.coinService.convertCoins(parseFloat(valueCoin), coinBase, coinConversion).subscribe({
      next: (data) => { this.conversionResult = parseFloat(Object.values(data).toString()).toFixed(2),  this.result = this.valueCoin + ' ' + this.selectedCoinBase + ' = ' + this.conversionResult + ' ' + this.selectedCoinConversion },
      error: (e) => console.error(e),
      complete: () => console.info('Requisição feita com sucesso!')
    })
  }
}
