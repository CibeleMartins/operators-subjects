# Angular Operadores e Subjects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Sobre
<p>Os operadores são um recurso da biblioteca rxjs e servem para transformar dados observáveis antes de mostra-los na aplicação/antes de informar ao subscribe(). Isso pode ser feito manualmente dentro das funcões do subscribe(), ou até mesmo dentro de um observável caso o tenha criado, mas a medida que a lógica que envolve os dados observáveis vai ficando mais complexa em uma aplicação, os operadores podem ser uma boa opção.</p>

## Como utilizar oepradores
<p> É possível implementá-los a partir do método -> pipe(); todo observável tem um método deste. O pipe pode ser imaginado como uma tubulação para os dados observados. A partir disso, você deve importar o operador que irá utilizar na sua tubulação de 'rxjs/operators', veja um exemplo abaixo:</p>

```javascript
import {
   import { map } from "rxjs/operators";
}
```

<p>No exemplo acima, o operador utilizado é o map. Ele deve ser declarado no parâmetro do pipe() e, em seu parâmetro, assume uma função como argumento, veja o exemplo abaixo:</p>

```javascript
  getCurrencyQuote() {
        return this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').pipe(map((data: any) => {}))}
```
<p>Essa função recebida como argumento no operador map(), recebe os dados observados que passaram pela tubulação em seu parâmetro:</p>

```javascript
     getCurrencyQuote() {
        return this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').pipe(map((data: any <-----) =>{}))}
```
<p>Dentro desta função, podemos transformar os dados observados para que em seguida o método subscribe() possa ser chamado mostrando os dados transformados em algum lugar da aplicação: </p>

```javascript
    getCurrencyQuote() {
        return this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').pipe(map((data: any) => {
            return [this.usd = {
                code: data.USDBRL.code,
                highPrice: this.formatPricesInBRL(data.USDBRL.high) ,
                lowPrice: this.formatPricesInBRL(data.USDBRL.low),
                percentageVariation: parseFloat(parseFloat(data.USDBRL.pctChange).toFixed(2)),
                saleValue: this.formatPricesInBRL(data.USDBRL.ask),
                buyValue:this.formatPricesInBRL(data.USDBRL.bid)  }
                ...]}))
    }
```

<p>Neste exemplo de código o operador map() foi utilizado para mapear os dados do observável retornado pelo método get(), conforme demonstrado na documentação [Angular] (https://angular.io/guide/http), e para cada dado retornado foram criados três objetos, os quais seguem o padrão da interface CoinPrice, e retornado um array com esses objetos.</p>

### Observações

1 - O pipe() pode receber um ou mais operadores em seu parâmetro. Eles são executados um após o outro fazendo diferentes transformações nos dados observados.

2 - Imagine que o operador map() é semelhante a função map() utilizada para percorrer arrays. Para cada um dos dados que passar pelo  pipe() e chegar no parâmetro da função assumida como argumento do operador map(), essa função vai fazer alguma transformação. Em sentido contínuo, também existe o operador filter(), que filtra os dados com base em uma condição.

## Sobre subjects
