import IuguCommon from './common'

class IuguTransfers extends IuguCommon<any> {
  get routeName (): string {
    return 'transfers'
  }
}

export default new IuguTransfers()
