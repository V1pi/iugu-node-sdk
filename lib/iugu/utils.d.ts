declare class IuguUtils {
    validateCreditCardNumber(value: string): boolean;
    formatUUID(e: string): string;
    validateAccountID(accountID: string): boolean;
    interpolateURL(url: string, data: Map<string, string>): string;
    interpolateQueryParams(params: Map<string, string>): string;
}
declare const _default: IuguUtils;
export default _default;
//# sourceMappingURL=utils.d.ts.map