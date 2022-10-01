import { FormHandler } from '../FormHandler'
import { FormFieldGetFn } from './FormFieldGetFn'
import { FormFieldSetFn } from './FormFieldSetFn'
import { RegisterToComponent } from './RegisterToComponent'
import { RegisterToInput } from './RegisterToInput'

/**
 * Extended version of {@link FormHandler} that can control form and partially
 * control its properties
 */
export interface FormFieldHandler<T> extends FormHandler<T> {
  getField: FormFieldGetFn<T>
  setField: FormFieldSetFn<T>
  register: RegisterToInput<T>
  registerComponent: RegisterToComponent<T>
}
