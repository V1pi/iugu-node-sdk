import IuguMethods from './iugu_methods'
import IuguCustomers from './resources/customers'
import IuguPaymentsTokens from './resources/payment_token'
import IuguInvoices from './resources/invoices'
import IuguCharges from './resources/charges'
import IuguAccounts from './resources/accounts'
import IuguMarketPlaces from './resources/marketplaces'
import IuguPlans from './resources/plans'
import IuguSubscriptions from './resources/subscriptions'
import IuguTransfers from './resources/transfers'
import IuguFinancialTransactionRequests from './resources/financial_transaction_requests'

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

  public get accounts (): typeof IuguAccounts {
    return IuguAccounts
  }

  public get marketplaces (): typeof IuguMarketPlaces {
    return IuguMarketPlaces
  }

  public get plans (): typeof IuguPlans {
    return IuguPlans
  }

  public get subscriptions (): typeof IuguSubscriptions {
    return IuguSubscriptions
  }

  public get transfers (): typeof IuguTransfers {
    return IuguTransfers
  }

  public get financialTransactionsRequests (): typeof IuguFinancialTransactionRequests {
    return IuguFinancialTransactionRequests
  }


  

  setApiKey (apikey: string): void {
    IuguMethods.setApiKey(apikey)
  }
}

export default new Iugu()
