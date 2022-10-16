import { FormArrayHandler } from '../../handler/array/FormArrayHandler'
import { FormState } from '../../state/FormState'

export interface FormArrayController<T>
  extends FormArrayHandler<T>,
    FormState<T[]> {}
