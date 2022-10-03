import { FormArrayHandler } from '../../handler/array/FormArrayHandler'
import { FormStateControl } from '../../state/FormStateControl'

export interface FormArrayController<T>
  extends FormArrayHandler<T>,
    FormStateControl<T[]> {}
