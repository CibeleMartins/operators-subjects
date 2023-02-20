import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApplicationFeatures } from 'src/app/services/ApplicationFeatures.service';
import { CoinService } from 'src/app/services/CoinService.service';

@Component({
  selector: 'app-conversion-dashboard',
  templateUrl: './conversion-dashboard.component.html',
  styleUrls: ['./conversion-dashboard.component.scss']
})
export class ConversionDashboardComponent implements OnInit, AfterViewInit{

  @ViewChild('converter', {static: true})
  refConverter!: ElementRef;
  
  coinsConversionOption!: string[];
  displayConverter!: boolean;
  selectedCoinBase: string = 'BRL';
  selectedCoinConversion: string = 'USD'
  valueCoin!: string;
  result!: string;
  converterIsClose = false

  constructor(private coinService: CoinService, private applicationService: ApplicationFeatures) { }

  ngOnInit() {
    this.coinService.getLegendCoins().subscribe({
      next: (data) => { this.coinsConversionOption = data },
      error: (e) => console.error(e),
      complete: () => console.info('Requisição feita com sucesso!')
    })

    // console.log('ref')
    // this.applicationService.localRefConverter.next(this.refConverter);
  }

  showConverter() {
    
    this.displayConverter = true
    this.converterIsClose = true
  }

  ngAfterViewInit() {
      console.log('afterview')
       this.applicationService.localRefConverter.subscribe((data)=> {
        this.converterIsClose = false
       })
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
