import IuguCommon from './common'
import { IuguInvoice } from '../models'
import IuguMethods from '../iugu_methods'

class IuguInvoices extends IuguCommon<IuguInvoice> {
  async cancel (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguInvoice> {
    return IuguMethods.createIuguMethod<IuguInvoice>({
      method: 'put',
      path: '/' + this.routeName + '/{invoice_id}/cancel',
      urlParams: ['invoice_id']
    })(data, urlParams)
  }

  async refund (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguInvoice> {
    return IuguMethods.createIuguMethod<IuguInvoice>({
      method: 'post',
      path: '/' + this.routeName + '/{invoice_id}/refund',
      urlParams: ['invoice_id']
    })(data, urlParams)
  }

  async capture (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguInvoice> {
    return IuguMethods.createIuguMethod<IuguInvoice>({
      method: 'post',
      path: '/' + this.routeName + '/{invoice_id}/capture',
      urlParams: ['invoice_id']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'invoices'
  }
}

export default new IuguInvoices()
