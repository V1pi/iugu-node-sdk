import { IuguMethod } from './models';
declare class IuguMethods {
    private get url();
    private apiKey?;
    setApiKey(apikey: string): void;
    createIuguMethod<T>(method: IuguMethod): (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined) => Promise<T>;
}
declare const _default: IuguMethods;
export default _default;
//# sourceMappingURL=iugu_methods.d.ts.map