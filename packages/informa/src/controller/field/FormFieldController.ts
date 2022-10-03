import { FormFieldHandler } from '../../handler/field/FormFieldHandler'
import { FormStateControl } from '../../state/FormStateControl'

export interface FormFieldController<T>
  extends FormFieldHandler<T>,
    FormStateControl<T> {}
