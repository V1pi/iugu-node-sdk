declare abstract class IuguCommon<T> {
    create(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T>;
    update(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T>;
    list(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T>;
    retrieve(data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T>;
    del(data: string, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T>;
    checkCreate(obj: T): void;
    checkDelete(obj: T): void;
    checkRetrieve(obj: T): void;
    checkList(obj: T): void;
    checkUpdate(obj: T): void;
    abstract get routeName(): string;
}
export default IuguCommon;
//# sourceMappingURL=common.d.ts.map