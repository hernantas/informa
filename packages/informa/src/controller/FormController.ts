import { FormHandler } from '../handler/FormHandler'
import { FormState } from '../state/FormState'

export interface FormController<T> extends FormState<T>, FormHandler<T> {}
