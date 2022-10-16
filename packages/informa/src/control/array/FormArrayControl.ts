import { FormArrayHandler } from '../../handler/array/FormArrayHandler'
import { FormState } from '../../state/FormState'

export interface FormArrayControl<T>
  extends FormArrayHandler<T>,
    FormState<T[]> {}
