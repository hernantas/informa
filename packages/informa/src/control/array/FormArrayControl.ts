import { FormArrayHandler } from '../../handler/array/FormArrayHandler'
import { ActionState } from '../../state/action/ActionState'

export interface FormArrayControl<T>
  extends FormArrayHandler<T>,
    ActionState<T> {}
