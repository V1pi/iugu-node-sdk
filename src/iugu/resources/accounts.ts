import IuguCommon from './common'
import IuguMethods from '../iugu_methods'

class IuguAccounts extends IuguCommon<any> {
  async requestVerification (data: string | object, urlParams: Map<string, string> | undefined): Promise<any> {
    return IuguMethods.createIuguMethod<any>({
      method: 'post',
      path: '/' + this.routeName + '/{account_id}/request_verification',
      urlParams: ['account_id']
    })(data, urlParams)
  }

  async requestWithdraw (data: string | object, urlParams: Map<string, string> | undefined): Promise<any> {
    return IuguMethods.createIuguMethod<any>({
      method: 'post',
      path: '/' + this.routeName + '/{account_id}/request_withdraw',
      urlParams: ['account_id']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'accounts'
  }
}

export default new IuguAccounts()
