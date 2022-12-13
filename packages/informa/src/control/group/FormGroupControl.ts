import { FormGroupHandler } from '../../handler/group/FormGroupHandler'
import { ActionState } from '../../state/action/ActionState'

export interface FormGroupControl<T>
  extends FormGroupHandler<T>,
    ActionState<T> {}
