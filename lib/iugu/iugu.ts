import IuguMethods from './iugu_methods'
import IuguCustomers from './resources/customers'
import IuguPaymentsTokens from './resources/payment_token'

class Iugu {
  public get customers (): typeof IuguCustomers { return IuguCustomers }
  public get paymentToken (): typeof IuguPaymentsTokens { return IuguPaymentsTokens }

  setApiKey (apikey: string): void {
    IuguMethods.setApiKey(apikey)
  }
}

export default new Iugu()
