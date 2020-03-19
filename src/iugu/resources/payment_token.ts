import IuguCommon from './common'
import { IuguPaymentToken } from '../models'
import IuguUtils from '../utils'

class IuguPaymentsTokens extends IuguCommon<IuguPaymentToken> {
  checkCreate (obj: IuguPaymentToken): void {
    if (!IuguUtils.validateCreditCardNumber(obj.data.number)) {
      throw new Error('Cartão de crédito inválido')
    }
  }

  get routeName (): string {
    return 'payment_token'
  }
}

export default new IuguPaymentsTokens()
