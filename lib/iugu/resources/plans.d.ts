import IuguCommon from './common';
declare class IuguPlans extends IuguCommon<any> {
    retrieveByIdentifier(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<any>;
    get routeName(): string;
}
declare const _default: IuguPlans;
export default _default;
//# sourceMappingURL=plans.d.ts.map