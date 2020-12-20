import IuguCommon from './common';
import { IuguConfigAccount, IuguVerificationAccount, IuguInfoAccount, IuguWithdrawRequest } from '../models';
declare class IuguAccounts extends IuguCommon<IuguInfoAccount> {
    requestVerification(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguVerificationAccount>;
    requestWithdraw(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguWithdrawRequest>;
    requestConfiguration(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguConfigAccount>;
    get routeName(): string;
}
declare const _default: IuguAccounts;
export default _default;
//# sourceMappingURL=accounts.d.ts.map