import IuguCommon from './common';
declare class IuguSubscriptions extends IuguCommon<any> {
    suspend(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<any>;
    activate(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<any>;
    changePlan(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<any>;
    addCredits(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<any>;
    removeCredits(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<any>;
    get routeName(): string;
}
declare const _default: IuguSubscriptions;
export default _default;
//# sourceMappingURL=subscriptions.d.ts.map