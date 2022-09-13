import { FormController } from '../base/FormController'
import { FormFieldGetFn } from './FormFieldGetFn'
import { FormFieldSetFn } from './FormFieldSetFn'
import { RegisterComponentFn } from './RegisterComponentFn'
import { RegisterFieldFn } from './RegisterFieldFn'

/**
 * Extended version of {@link FormController} that can control form and partially
 * control its properties
 */
export interface FormFieldController<T> extends FormController<T> {
  getField: FormFieldGetFn<T>
  setField: FormFieldSetFn<T>
  register: RegisterFieldFn<T>
  registerComponent: RegisterComponentFn<T>
}
