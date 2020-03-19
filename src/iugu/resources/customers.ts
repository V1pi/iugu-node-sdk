import IuguCommon from './common'

import IuguMethods from '../iugu_methods'
import { IuguClient, IuguPaymentMethod } from '../models'

class IuguCustomers extends IuguCommon<IuguClient> {
  checkCreate (obj: IuguClient): void {
    if (obj.email === '') {
      throw new Error('É obrigatorio que haja um email')
    }

    if (obj.name === '') {
      throw new Error('É obrigatorio que haja um nome')
    }
  }

  async createPaymentMethod (
    data: string | object,
    urlParams: Map<string, string> | undefined
  ): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'post',
      path: '/{customerId}/payment_methods',
      urlParams: ['customerId']
    })(data, urlParams)
  }

  async listPaymentMethod (
    data: string | object,
    urlParams: Map<string, string> | undefined
  ): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'get',
      path: '/{customerId}/payment_methods',
      urlParams: ['customerId']
    })(data, urlParams)
  }

  async retrievePaymentMethod (
    data: string | object,
    urlParams: Map<string, string> | undefined
  ): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'get',
      path: '/{customerId}/payment_methods/{paymentMethodId}',
      urlParams: ['customerId', 'paymentMethodId']
    })(data, urlParams)
  }

  async updatePaymentMethod (
    data: string | object,
    urlParams: Map<string, string> | undefined
  ): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'post',
      path: '/{customerId}/payment_methods/{paymentMethodId}',
      urlParams: ['customerId', 'paymentMethodId']
    })(data, urlParams)
  }

  async deletePaymentMethod (
    data: string | object,
    urlParams: Map<string, string> | undefined
  ): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'delete',
      path: '/{customerId}/payment_methods/{paymentMethodId}',
      urlParams: ['customerId', 'paymentMethodId']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'customers'
  }
}

export default new IuguCustomers()
