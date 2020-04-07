import IuguCommon from './common'
import IuguMethods from '../iugu_methods'
import { IuguConfigAccount, IuguVerificationAccount, IuguInfoAccount, IuguWithdrawRequest } from '../models'

class IuguAccounts extends IuguCommon<IuguInfoAccount> {
  async requestVerification (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguVerificationAccount> {
    return IuguMethods.createIuguMethod<IuguVerificationAccount>({
      method: 'post',
      path: '/' + this.routeName + '/{account_id}/request_verification',
      urlParams: ['account_id']
    })(data, urlParams)
  }

  async requestWithdraw (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguWithdrawRequest> {
    return IuguMethods.createIuguMethod<IuguWithdrawRequest>({
      method: 'post',
      path: '/' + this.routeName + '/{account_id}/request_withdraw',
      urlParams: ['account_id']
    })(data, urlParams)
  }

  async requestConfiguration (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguConfigAccount> {
    return IuguMethods.createIuguMethod<IuguConfigAccount>({
      method: 'post',
      path: '/' + this.routeName + '/configuration',
      urlParams: []
    })(data, urlParams)
  }

  get routeName (): string {
    return 'accounts'
  }
}

export default new IuguAccounts()
