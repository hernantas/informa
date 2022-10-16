import { Action } from '../type/Action'
import { OnSubmitHandler } from './OnSubmitHandler'

export interface CreateSubmit<T> {
  (handler: OnSubmitHandler<T>): Action
}
