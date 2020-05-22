import { IuguMethod } from './models'
import IuguUtils from './utils'
import * as axios from 'axios'

class IuguMethods {
  private get url (): string {
    return 'https://api.iugu.com/v1'
  }

  private apiKey?: string

  setApiKey (apikey: string): void {
    this.apiKey = apikey
  }

  createIuguMethod<T> (
    method: IuguMethod
  ): (
    data: string | object,
    urlParams?: Map<string, string> | undefined,
    queryParams?: Map<string, string> | undefined
  ) => Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return async function (
      data: string | object,
      urlParams?: Map<string, string> | undefined,
      queryParams?: Map<string, string> | undefined
    ): Promise<T> {
      if (!self.apiKey) {
        throw new Error('Você deve chamar setApiKey')
      }

      if (
        (urlParams !== undefined && !method.urlParams) ||
        (urlParams !== undefined &&
          !method.urlParams.every(param => urlParams.get(param) != null))
      ) {
        throw new Error('Você deve passar todos os parâmetros de URL. Esperado: ' + urlParams.keys() + ' Recebido: ' + method.urlParams)
      }

      if (data instanceof Object) {
        if (method.checkErrors !== undefined) {
          method.checkErrors(data)
        }
        data = JSON.stringify(data)
      }
      const params: Map<string, string> = urlParams || new Map()
      const path = IuguUtils.interpolateURL(method.path, params)
      let fullURL = self.url + path
      if (queryParams !== undefined && queryParams.size !== 0) {
        fullURL += IuguUtils.interpolateQueryParams(queryParams)
      }
      const configs: axios.AxiosRequestConfig = {
        auth: {
          username: self.apiKey,
          password: ''
        },
        data: data,
        url: fullURL,
        method: method.method,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await axios.default.request(configs)
      const result: T = response.data
      return result
    }
  }
}

export default new IuguMethods()
