import { FormHandler } from '../handler/FormHandler'
import { FormState } from '../state/FormState'

export interface FormControl<T> extends FormState<T>, FormHandler<T> {}
