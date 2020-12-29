import IuguCommon from './common'

import IuguMethods from '../iugu_methods'
import { IuguCustomer, IuguPaymentMethod } from '../models'

class IuguCustomers extends IuguCommon<IuguCustomer> {
  checkCreate (obj: IuguCustomer): void {
    if (obj.email === '') {
      throw new Error('É obrigatorio que haja um email')
    }

    if (obj.name === '') {
      throw new Error('É obrigatorio que haja um nome')
    }
  }

  async createPaymentMethod (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'post',
      path: '/' + this.routeName + '/{customer_id}/payment_methods',
      urlParams: ['customer_id']
    })(data, urlParams)
  }

  async listPaymentMethod (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'get',
      path: '/' + this.routeName + '/{customer_id}/payment_methods',
      urlParams: ['customer_id']
    })(data, urlParams)
  }

  async retrievePaymentMethod (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'get',
      path: '/' + this.routeName + '/{customer_id}/payment_methods/{paymentMethodId}',
      urlParams: ['customer_id', 'paymentMethodId']
    })(data, urlParams)
  }

  async updatePaymentMethod (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'post',
      path: '/' + this.routeName + '/{customer_id}/payment_methods/{paymentMethodId}',
      urlParams: ['customer_id', 'paymentMethodId']
    })(data, urlParams)
  }

  async deletePaymentMethod (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod> {
    return IuguMethods.createIuguMethod<IuguPaymentMethod>({
      method: 'delete',
      path: '/' + this.routeName + '/{customer_id}/payment_methods/{paymentMethodId}',
      urlParams: ['customer_id', 'paymentMethodId']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'customers'
  }
}

export default new IuguCustomers()
