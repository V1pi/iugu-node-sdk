import IuguMethods from '../iugu_methods'

abstract class IuguCommon<T> {
  async create (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T> {
    return IuguMethods.createIuguMethod<T>({
      method: 'post',
      path: '/' + this.routeName,
      urlParams: [],
      checkErrors: this.checkCreate
    })(data, urlParams)
  }

  async update (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T> {
    return IuguMethods.createIuguMethod<T>({
      method: 'put',
      path: '/' + this.routeName + '/{id}',
      urlParams: ['id'],
      checkErrors: this.checkUpdate
    })(data, urlParams)
  }

  async list (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T> {
    return IuguMethods.createIuguMethod<T>({
      method: 'get',
      path: '/' + this.routeName,
      urlParams: [],
      checkErrors: this.checkList
    })(data, urlParams, queryParams)
  }

  async retrieve (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T> {
    return IuguMethods.createIuguMethod<T>({
      method: 'get',
      path: '/' + this.routeName + '/{id}',
      urlParams: ['id'],
      checkErrors: this.checkRetrieve
    })(data, urlParams)
  }

  async del (data: string, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<T> {
    return IuguMethods.createIuguMethod<T>({
      method: 'delete',
      path: '/' + this.routeName + '/{id}',
      urlParams: ['id'],
      checkErrors: this.checkDelete
    })(data, urlParams)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkCreate (obj: T): void {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkDelete (obj: T): void {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkRetrieve (obj: T): void {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkList (obj: T): void {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkUpdate (obj: T): void {}

  abstract get routeName(): string
}

export default IuguCommon
