import { FormGroupControl } from '../control/group/FormGroupControl'
import { ActionState } from '../state/action/ActionState'

export interface FormController<T>
  extends FormGroupControl<T>,
    ActionState<T> {}
