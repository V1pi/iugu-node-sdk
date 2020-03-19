# Iugu SDK para Node.JS

Com o objetivo de fornecer um SDK Node para acesso a API da Iugu de forma fácil e tipada.

## Como usar

Com sua API key gerada pela plataformada da Iugu inicialize o sdk:
```ts
import Iugu, { IuguClient } from 'iugu'

Iugu.setApiKey('<SUA API KEY>')
```
Existe alguns models que foram criados para padronizar as respostas e requisição para a API.
Um exemplo de utilização da API para criação de um cliente:
```ts
const client: IuguClient = {
    name: 'Vinicius Picanco',
    email: 'teste@teste.com'
}

// Pode ser utilizar com await
const resultClient : IuguClient = await Iugu.customers.create(client, undefined)

// Ou
Iugu.customers.create(client, undefined).then((cli: IuguClient) => {
    // On success
}).catch((error: Error) => {
    // On error
})
```

Todas os métodos seguem o parametro de Iugu._{recurso}_._{método}_(_model_,_urlParams_)

Os parâmetros de URL devem ser passados pelo segundo parâmetro dos métodos, da seguinte forma:

```ts
const client: IuguClient = {
    name: 'Vinicius Picanco',
    email: 'teste@teste.com'
}

const urlParams: Map<string, string> = new Map()
urlParams.set('id', '558958DB714B389EA6B1FF0A33D75505')

// Pode ser utilizar com await
const resultClient : IuguClient = await Iugu.customers.update(client, urlParams)

// Ou
Iugu.customers.create(client, urlParams).then((cli: IuguClient) => {
    // On success
}).catch((error: Error) => {
    // On error
})
```

## Observação
Para saber quais requisições estão disponíveis e quais parâmetros passar acesse a documentação [dev.iugu.com/reference](https://dev.iugu.com/reference) para referência.

## Testes
Para o funcionamento dos testes crie um arquivo chamado _iugu\_services.json_ na pasta _tests_ com os seguintes dados:

```json
{
    "accountId": "<SUA ACCOUNT ID>",
    "apiKey": "<API KEY PREFERENCIALMENTE DE TESTES>",
    "clientId": "<UM CLIENT ID VÁLIDO>",
    "paymentMethodToken": "<<UM TOKEN DE FORMA DE PAGAMENTO VÁLIDO>>"
}
```

Se for contribuir sempre crie e execute os testes:

`npm run test`


## Créditos

Escrito por [Vinícius Picanço](https://github.com/V1pi) (viniciusspicanco@gmail.com).
