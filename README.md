# Angular Operators Subjects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Sobre
<p>Os operadores são um recurso da biblioteca rxjs e servem para transformar dados observáveis antes de mostrar a saída deles no subscribe(). Isso pode ser feito manualmente dentro das funcões do subscribe() ou até mesmo dentro se um observável caso o tenha criado, mas a medida que a lógica que envolve os dados observáveis vai ficando mais complexa em uma aplicação, os operadores podem ser uma boa opção.</p>

## Como utilizar oepradores
<p> É possível implementá-los a partir do método -> pipe(); todo observável tem um método deste, pois está embutido na biblioteca rxjs. O pipe pode ser imaginado como uma tubulação para os dados observados no observável. A partir disso, você deve importar o operador que irá utilizar na sua tubulação de 'rxjs/operators', veja um exemplo abaixo:</p>

```javascript
import {

}
```

<p>No exemplo acima, o operador utilizado é o map, o qual se parece com o função map() do JavaScript. Ele deve ser declarado no parâmetro do pipe() e, em seu parâmetro, assume uma função como argumento, veja o exemplo abaixo:</p>

```javascript

```

<p>Essa função recebida como argumento no operador map(), recebe os dados observados que passaram pela tubulação em seu parâmetro, e estes, devem estar devidamente atribuídos de seus tipos:</p>


```javascript
import {

}
```
<p>Dentro desta função, podemos transformar os dados observados para que em seguida o método subscribe() possa ser chamado mostrando os dados transformados em algum lugar da aplicação: </p>

```javascript
import {

}
```

### Observações

1 - O pipe() pode receber um ou mais operadores em seu parâmetro. Eles são executados um após o outro fazendo diferentes transformações nos dados observados.

2 - Imagine que o operador map() é semelhante a função map() em JavaScript. Para cada um dos dados que passar pelo  pipe() e chegar no prâmetro da função assumida como argumento do operador map(), essa função vai fazer alguma transformação. Em sentido contínuo, também existe o operador filter(), que filtra os dados com base em uma condição.