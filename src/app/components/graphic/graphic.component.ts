import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  @ViewChild('graphic', { static: true })
  refGraphic!: ElementRef;

  ngOnInit() {
    new Chart(this.refGraphic.nativeElement, {
      type: 'line',
      data: {
        labels: ['um titulo pra cada valor'],
        datasets: [
          {data: ['valores a exibir no gráfico'],
          borderColor: 'cor da linha ',
          fill: false},
        
          {data: ['outros valores'],
          borderColor: 'cor da linha ',
          fill: false,},
          
          {data: ['outros valores'],
          borderColor: 'cor da linha ',
          fill: false,}
        ]
      },
    })
  }

}
