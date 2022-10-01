import { FormFieldHandler } from '../field/FormFieldHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { FormFieldIndexedHandler } from './FormFieldIndexedHandler'

export interface FormFieldArrayController<T> extends FormFieldHandler<T[]> {
  controllers: FormFieldIndexedHandler<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
  removeAt: ArrayRemoveAtFn
}
