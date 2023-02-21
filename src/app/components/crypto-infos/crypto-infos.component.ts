import { Component } from '@angular/core';
import { CryptoCoinService } from 'src/app/services/CryptoCoin.service';

@Component({
  selector: 'app-crypto-infos',
  templateUrl: './crypto-infos.component.html',
  styleUrls: ['./crypto-infos.component.scss']
})
export class CryptoInfosComponent {

  constructor(private cryptoService: CryptoCoinService) {

  }

  ngOnInit() {
    this.cryptoService.getCryptoInfos().subscribe((data)=> {
      console.log(data)
    })
  }
}
