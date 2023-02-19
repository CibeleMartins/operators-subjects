import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CoinService } from 'src/app/services/CoinService.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  @ViewChild('graphic', { static: true })
  refGraphic!: ElementRef;

  graphic: any = []
  coinLabels: any[] = [];
  coinBuyValue: any[] = [];
  coinSaleValue: any[] = [];
  coinPercentageVariationValue: any[] = [];


  constructor(private coinService: CoinService, private breakpointService: BreakpointObserver) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.coinService.getCurrencyQuote().subscribe({
      next: (data) => {
        data.map((i) => {
          this.coinLabels.push(i.code)
          // console.log(this.graphic.data.labels)
          // console.log(this.coinLabels)
          this.coinBuyValue.push(i.buyValue)
          // console.log(this.graphic.data.datasets[0])
          // console.log(this.coinBuyValue)
          this.coinSaleValue.push(i.saleValue)
          // console.log(this.graphic.data.datasets[1])
          // console.log(this.coinSaleValue)
          this.coinPercentageVariationValue.push(i.percentageVariation)
          // console.log(this.graphic.data.datasets[2])
          // console.log(this.coinPercentageVariationValue)
        })
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('Requisição feita com sucesso!')
        return this.graphic = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.coinLabels,
            datasets: [
              {
                label: 'Valor de compra',
                data: this.coinBuyValue,
                borderColor: '#32F900',
                fill: false
              },

              {
                label: 'Valor de venda',
                data: this.coinSaleValue,
                borderColor: '#6CC6CB',
                fill: false,
              },

              {
                label: 'Porcentagem de variação',
                data: this.coinPercentageVariationValue,
                borderColor: '#FF4500',
                fill: false,
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            showLine: true,
            plugins: {
              legend: {
                display: false
              }
            }

          }
        })
      }

    })
  }
}


