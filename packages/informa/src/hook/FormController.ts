import { FormFieldControl } from '../control/field/FormFieldControl'
import { ActionState } from '../state/action/ActionState'

export interface FormController<T>
  extends FormFieldControl<T>,
    ActionState<T> {}
