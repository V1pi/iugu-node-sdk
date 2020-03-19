import IuguMethods from './iugu_methods'
import IuguCustomers from './resources/customers'
import IuguPaymentsTokens from './resources/payment_token'
import IuguInvoices from './resources/invoices'
import IuguCharges from './resources/charges'

class Iugu {
  public get customers (): typeof IuguCustomers {
    return IuguCustomers
  }

  public get paymentToken (): typeof IuguPaymentsTokens {
    return IuguPaymentsTokens
  }

  public get invoices (): typeof IuguInvoices {
    return IuguInvoices
  }

  public get charge (): typeof IuguCharges {
    return IuguCharges
  }

  setApiKey (apikey: string): void {
    IuguMethods.setApiKey(apikey)
  }
}

export default new Iugu()
