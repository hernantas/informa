import { FormFieldHandler } from '../../handler/field/FormFieldHandler'
import { FormState } from '../../state/FormState'

export interface FormFieldControl<T>
  extends FormFieldHandler<T>,
    FormState<T> {}
