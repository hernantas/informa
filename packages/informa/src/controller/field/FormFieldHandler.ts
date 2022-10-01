import { FormHandler } from '../base/FormHandler'
import { FormFieldGetFn } from './FormFieldGetFn'
import { FormFieldSetFn } from './FormFieldSetFn'
import { RegisterToComponent } from './RegisterToComponent'
import { RegisterFieldFn } from './RegisterFieldFn'

/**
 * Extended version of {@link FormHandler} that can control form and partially
 * control its properties
 */
export interface FormFieldHandler<T> extends FormHandler<T> {
  getField: FormFieldGetFn<T>
  setField: FormFieldSetFn<T>
  register: RegisterFieldFn<T>
  registerComponent: RegisterToComponent<T>
}
