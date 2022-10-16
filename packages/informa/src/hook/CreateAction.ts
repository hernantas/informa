import { Action } from '../type/Action'
import { OnActionHandler } from './OnActionHandler'

export interface CreateAction<T> {
  (handler: OnActionHandler<T>): Action
}
