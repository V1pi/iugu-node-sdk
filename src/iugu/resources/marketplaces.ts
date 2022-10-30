import IuguCommon from './common'
import IuguMethods from '../iugu_methods'
import { IuguAccount } from '../models'

class IuguMarketPlaces extends IuguCommon<any> {
  async createAccount (data: string | object, urlParams?: Map<string, string> | object, queryParams?: Map<string, string> | object): Promise<IuguAccount> {
    return IuguMethods.createIuguMethod<IuguAccount>({
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
