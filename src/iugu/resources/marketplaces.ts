import IuguCommon from './common'
import IuguMethods from '../iugu_methods'

class IuguMarketPlaces extends IuguCommon<any> {
  async createAccount (data: string | object, urlParams: Map<string, string> | undefined): Promise<any> {
    return IuguMethods.createIuguMethod<any>({
      method: 'post',
      path: '/' + this.routeName + '/create_account',
      urlParams: []
    })(data, urlParams)
  }

  get routeName (): string {
    return 'marketplace'
  }
}

export default new IuguMarketPlaces()
