import IuguMethods from '../iugu_methods'
import { FinancialTransaction, FinancialTransactionSimulationPerInstallments, FinancialTransactionExecutePerInstallments } from '../models'

class IuguFinancialTransactionRequests {
  async FinancialTransactionList (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<FinancialTransaction> {
    return IuguMethods.createIuguMethod<FinancialTransaction>({
      method: 'get',
      path: '/' + this.routeName,
      urlParams: []
    })(data, urlParams, queryParams)
  }

  async FinancialTransactionRequestsSimulationPerInstallment(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<FinancialTransactionSimulationPerInstallments> {
    return IuguMethods.createIuguMethod<FinancialTransactionSimulationPerInstallments>({
      method: 'get',
      path: '/' + this.routeName + '/advance_simulation',
      urlParams: []
    })(data, urlParams, queryParams)
  }
  
  async FinancialTransactionRequestsExecutePerInstallment (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<FinancialTransactionExecutePerInstallments> {
    return IuguMethods.createIuguMethod<FinancialTransactionExecutePerInstallments>({
      method: 'post',
      path: '/' + this.routeName + '/advance',
      urlParams: []
    })(data, urlParams, queryParams)
  }

  get routeName (): string {
    return 'financial_transaction_requests'
  }
}

export default new IuguFinancialTransactionRequests()
