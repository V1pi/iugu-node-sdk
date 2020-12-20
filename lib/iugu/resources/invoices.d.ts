import IuguCommon from './common';
import { IuguInvoice } from '../models';
declare class IuguInvoices extends IuguCommon<IuguInvoice> {
    cancel(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguInvoice>;
    refund(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguInvoice>;
    capture(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguInvoice>;
    get routeName(): string;
}
declare const _default: IuguInvoices;
export default _default;
//# sourceMappingURL=invoices.d.ts.map