import Iugu, { IuguClient, IuguPaymentToken, IuguInvoice, IuguCharge, IuguPaymentMethod } from '../src/iugu'

import * as fs from 'fs'
import * as path from 'path'

interface IuguServices {
  accountId: string;
  apiKey: string;
  clientId: string;
  paymentMethodToken: string;
  subApiKey: string;
}

let iuguServices: IuguServices = {
  accountId: '',
  apiKey: '',
  clientId: '',
  paymentMethodToken: '',
  subApiKey: ''
}

beforeAll(() => {
  const file = fs.readFileSync(path.join(__dirname, 'iugu_services.json'), 'utf8')
  iuguServices = JSON.parse(file)
  Iugu.setApiKey(iuguServices.apiKey)
})

test('should list invoices', async () => {
  const resultInvoices = await Iugu.invoices.list('', undefined, {
    paid_at_from: '2019-01-30T00:00:00-03:00',
    paid_at_to: '2020-04-30T00:00:00-03:00'
  })
  expect(resultInvoices.totalItems).toBeDefined()
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
      year: '2030'
    }
  }
  const resultPayment = await Iugu.paymentToken.create(payment, undefined)

  expect(resultPayment.id).toBeDefined()
})

test('should create invoice', async () => {
  const date = new Date()
  const invoice: IuguInvoice = {
    email: 'teste@teste.com',
    due_date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    items: [
      {
        description: 'Alcool em gel',
        quantity: 1,
        price_cents: 30000
      }
    ],
    payer: {
      cpf_cnpj: '34737969052',
      name: 'Vinicius Picanco',
      address: {
        zip_code: '36010070',
        number: '125'
      }
    }
  }
  const resultInvoice = await Iugu.invoices.create(invoice, undefined)
  expect(resultInvoice.id).toBeDefined()
})

test('should create payment methods', async () => {
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
      year: '2030'
    }
  }
  const resultPayment = await Iugu.paymentToken.create(payment, undefined)

  const paymetMethod: IuguPaymentMethod = {
    description: 'Meu cartão',
    token: resultPayment.id,
    set_as_default: false
  }
  const resultPaymentMethod = await Iugu.customers.createPaymentMethod(paymetMethod, {
    customer_id: iuguServices.clientId
  })
  expect(resultPaymentMethod.id).toBeDefined()
})

test('should create charge', async () => {
  const date = new Date()
  const invoice: IuguInvoice = {
    email: 'teste@teste.com',
    due_date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    items: [
      {
        description: 'Alcool em gel',
        quantity: 1,
        price_cents: 30000
      }
    ],
    payer: {
      cpf_cnpj: '34737969052',
      name: 'Vinicius Picanco',
      address: {
        zip_code: '36010070',
        number: '125'
      }
    }
  }

  const resultInvoice = await Iugu.invoices.create(invoice, undefined)
  const charge: IuguCharge = {
    customer_payment_method_id: iuguServices.paymentMethodToken,
    customer_id: iuguServices.clientId,
    invoice_id: resultInvoice.id
  }

  const resultCharge = await Iugu.charge.create(charge, undefined)

  expect(resultCharge.message).toBe('Autorizado')
})
