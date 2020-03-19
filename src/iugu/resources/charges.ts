import IuguCommon from './common'
import { IuguCharge } from '../../iugu'

class IuguCharges extends IuguCommon<IuguCharge> {
  get routeName (): string {
    return 'charge'
  }
}

export default new IuguCharges()
