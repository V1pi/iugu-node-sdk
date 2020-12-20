import IuguCommon from './common';
import { IuguAccount } from '../models';
declare class IuguMarketPlaces extends IuguCommon<any> {
    createAccount(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguAccount>;
    get routeName(): string;
}
declare const _default: IuguMarketPlaces;
export default _default;
//# sourceMappingURL=marketplaces.d.ts.map