import IuguCommon from './common'
import IuguMethods from '../iugu_methods'

class IuguPlans extends IuguCommon<any> {
  async retrieveByIdentifier (data: string | object, urlParams?: Map<string, string> | object, queryParams?: Map<string, string> | object): Promise<any> {
    return IuguMethods.createIuguMethod<any>({
      method: 'get',
      path: '/' + this.routeName + '/identifier/{identifier}/',
      urlParams: ['identifier']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'plans'
  }
}

export default new IuguPlans()
