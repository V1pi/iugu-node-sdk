import IuguCustomers from './resources/customers';
import IuguPaymentsTokens from './resources/payment_token';
import IuguInvoices from './resources/invoices';
import IuguCharges from './resources/charges';
import IuguAccounts from './resources/accounts';
import IuguMarketPlaces from './resources/marketplaces';
import IuguPlans from './resources/plans';
import IuguSubscriptions from './resources/subscriptions';
import IuguTransfers from './resources/transfers';
declare class Iugu {
    get customers(): typeof IuguCustomers;
    get paymentToken(): typeof IuguPaymentsTokens;
    get invoices(): typeof IuguInvoices;
    get charge(): typeof IuguCharges;
    get accounts(): typeof IuguAccounts;
    get marketplaces(): typeof IuguMarketPlaces;
    get plans(): typeof IuguPlans;
    get subscriptions(): typeof IuguSubscriptions;
    get transfers(): typeof IuguTransfers;
    setApiKey(apikey: string): void;
}
declare const _default: Iugu;
export default _default;
//# sourceMappingURL=iugu.d.ts.map