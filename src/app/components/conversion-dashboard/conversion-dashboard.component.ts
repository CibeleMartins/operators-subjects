import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApplicationFeatures } from 'src/app/services/ApplicationFeatures.service';
import { CoinService } from 'src/app/services/CoinService.service';

@Component({
  selector: 'app-conversion-dashboard',
  templateUrl: './conversion-dashboard.component.html',
  styleUrls: ['./conversion-dashboard.component.scss']
})
export class ConversionDashboardComponent implements OnInit {

  coinsConversionOption!: string[];
  displayConverter!: boolean;
  selectedCoinBase: string = 'BRL';
  selectedCoinConversion: string = 'USD'
  valueCoin!: string;
  result!: string;

  constructor(private coinService: CoinService, private featuresApplicationService: ApplicationFeatures) { }

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
    // console.log(parseFloat(valueCoin), coinBase, coinConversion)
    if(coinBase !== coinConversion) {
      this.coinService.convertCoins(parseFloat(valueCoin), coinBase, coinConversion).subscribe({
        next: (data: string) => { this.result = this.valueCoin + ' ' + this.selectedCoinBase + ' = ' + data + ' ' + this.selectedCoinConversion },
        error: (e: any) => console.error(e),
        complete: () => console.info('Requisição feita com sucesso!')
      })
    } else {
      alert('Moeda base e de conversão iguais, não foi possível converter.')
      // this.featuresApplicationService.openSnackBar(null, null, null, 'Moeda base e de conversão iguais, não foi possível converter.', '')
    }

  }

}
