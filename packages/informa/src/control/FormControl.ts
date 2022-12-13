import { FormHandler } from '../handler/FormHandler'
import { ActionState } from '../state/action/ActionState'

export interface FormControl<T> extends FormHandler<T>, ActionState<T> {}
