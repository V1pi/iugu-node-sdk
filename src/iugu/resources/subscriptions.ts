import IuguCommon from './common'
import IuguMethods from '../iugu_methods'
import { IuguSubscription } from '../models'

class IuguSubscriptions extends IuguCommon<IuguSubscription> {
  async suspend (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguSubscription> {
    return IuguMethods.createIuguMethod<IuguSubscription>({
      method: 'post',
      path: '/' + this.routeName + '/{subscription_id}/suspend',
      urlParams: ['subscription_id']
    })(data, urlParams)
  }

  async activate (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguSubscription> {
    return IuguMethods.createIuguMethod<IuguSubscription>({
      method: 'post',
      path: '/' + this.routeName + '/{subscription_id}/activate',
      urlParams: ['subscription_id']
    })(data, urlParams)
  }

  async changePlan (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguSubscription> {
    return IuguMethods.createIuguMethod<IuguSubscription>({
      method: 'post',
      path: '/' + this.routeName + '/{subscription_id}/change_plan/{plan_identifier}',
      urlParams: ['subscription_id', 'plan_identifier']
    })(data, urlParams)
  }

  async addCredits (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguSubscription> {
    return IuguMethods.createIuguMethod<IuguSubscription>({
      method: 'put',
      path: '/' + this.routeName + '/{subscription_id}/add_credits',
      urlParams: ['subscription_id']
    })(data, urlParams)
  }

  async removeCredits (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguSubscription> {
    return IuguMethods.createIuguMethod<IuguSubscription>({
      method: 'put',
      path: '/' + this.routeName + '/{subscription_id}/remove_credits',
      urlParams: ['subscription_id']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'subscriptions'
  }
}

export default new IuguSubscriptions()
