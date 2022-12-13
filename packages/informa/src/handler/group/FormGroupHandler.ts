import { FormHandler } from '../FormHandler'
import { FormGroupGetFn } from './FormGroupGetFn'
import { FormGroupSetFn } from './FormGroupSetFn'
import { RegisterToComponent } from './RegisterToComponent'
import { RegisterToHtml } from './RegisterToHtml'

/**
 * Extended version of {@link FormHandler} that can control form and partially
 * control its properties
 */
export interface FormGroupHandler<T> extends FormHandler<T> {
  getField: FormGroupGetFn<T>
  setField: FormGroupSetFn<T>
  register: RegisterToHtml<T>
  registerComponent: RegisterToComponent<T>
}
