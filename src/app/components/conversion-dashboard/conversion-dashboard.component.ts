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

  constructor(private coinService: CoinService) {}

  ngOnInit( ) {
    this.coinService.convertValueCoin().subscribe({
      next: (data) => {console.log(data), this.coinsConversionOption = data },
      error: (e) => console.error(e),
      complete: () => console.info('Requisição feita com sucesso!') 
    })
  }

  showConverter() {
    this.displayConverter = true;
  }
}
