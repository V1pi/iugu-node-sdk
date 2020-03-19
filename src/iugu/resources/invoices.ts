import IuguCommon from './common'
import { IuguInvoice } from '../models'
import IuguMethods from '../iugu_methods'

class IuguInvoices extends IuguCommon<IuguInvoice> {
  async cancel (data: string | object, urlParams: Map<string, string> | undefined): Promise<IuguInvoice> {
    return IuguMethods.createIuguMethod<IuguInvoice>({
      method: 'put',
      path: '{invoiceId}/cancel',
      urlParams: ['invoiceId']
    })(data, urlParams)
  }

  async refund (data: string | object, urlParams: Map<string, string> | undefined): Promise<IuguInvoice> {
    return IuguMethods.createIuguMethod<IuguInvoice>({
      method: 'post',
      path: '{invoiceId}/refund',
      urlParams: ['invoiceId']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'invoices'
  }
}

export default new IuguInvoices()
