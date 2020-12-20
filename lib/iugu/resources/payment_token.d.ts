import IuguCommon from './common';
import { IuguPaymentToken } from '../models';
declare class IuguPaymentsTokens extends IuguCommon<IuguPaymentToken> {
    checkCreate(obj: IuguPaymentToken): void;
    get routeName(): string;
}
declare const _default: IuguPaymentsTokens;
export default _default;
//# sourceMappingURL=payment_token.d.ts.map