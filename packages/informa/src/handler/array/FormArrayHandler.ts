import { FormFieldHandler } from '../field/FormFieldHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'

export interface FormArrayHandler<T> extends FormFieldHandler<T[]> {
  handlers: FormFieldHandler<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
  removeAt: ArrayRemoveAtFn
}
