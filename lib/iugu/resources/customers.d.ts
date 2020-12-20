import IuguCommon from './common';
import { IuguClient, IuguPaymentMethod } from '../models';
declare class IuguCustomers extends IuguCommon<IuguClient> {
    checkCreate(obj: IuguClient): void;
    createPaymentMethod(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod>;
    listPaymentMethod(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod>;
    retrievePaymentMethod(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod>;
    updatePaymentMethod(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod>;
    deletePaymentMethod(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPaymentMethod>;
    get routeName(): string;
}
declare const _default: IuguCustomers;
export default _default;
//# sourceMappingURL=customers.d.ts.map