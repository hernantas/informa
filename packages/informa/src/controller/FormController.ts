import { FormHandler } from '../handler/FormHandler'
import { FormStateControl } from '../state/FormStateControl'

export interface FormController<T>
  extends FormHandler<T>,
    FormStateControl<T> {}
