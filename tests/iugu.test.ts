import { IuguClient, IuguPaymentToken } from '../src/models'
import Iugu from '../src/iugu'
import * as fs from 'fs'
import * as path from 'path'

interface IuguServices {
  accountId: string;
  apiKey: string;
  clientId: string;
}

let iuguServices: IuguServices = {
  accountId: '',
  apiKey: '',
  clientId: ''
}

beforeAll(() => {
  const file = fs.readFileSync(path.join(__dirname, 'iugu_services.json'), 'utf8')
  iuguServices = JSON.parse(file)
  Iugu.setApiKey(iuguServices.apiKey)
})

test('should create client', async () => {
  const client: IuguClient = {
    name: 'Vinicius Picanco',
    email: 'teste@teste.com'
  }
  const resultClient = await Iugu.customers.create(client, undefined)
  expect(resultClient.name).toBe(client.name)
  expect(resultClient.email).toBe(client.email)
  expect(resultClient.id).toBeDefined()
})

test('should create token', async () => {
  const payment: IuguPaymentToken = {
    account_id: iuguServices.accountId,
    method: 'credit_card',
    test: true,
    data: {
      number: '4111111111111111',
      verification_value: '472',
      first_name: 'Vinicius',
      last_name: 'Picanco',
      month: '07',
      year: '2021'
    }
  }
  const resultPayment = await Iugu.paymentToken.create(payment, undefined)

  expect(resultPayment.id).toBeDefined()
})
