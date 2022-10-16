import { OnSubmitHandler } from './OnSubmitHandler'
import { OnSubmitAction } from './OnSubmitAction'

export interface CreateSubmit<T> {
  (handler: OnSubmitHandler<T>): OnSubmitAction
}
