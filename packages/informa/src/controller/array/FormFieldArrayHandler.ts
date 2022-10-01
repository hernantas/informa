import { FormFieldHandler } from '../field/FormFieldHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'

export interface FormFieldArrayHandler<T> extends FormFieldHandler<T[]> {
  controllers: FormFieldHandler<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
  removeAt: ArrayRemoveAtFn
}
