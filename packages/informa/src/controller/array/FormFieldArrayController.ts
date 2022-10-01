import { FormFieldHandler } from '../field/FormFieldHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { FormIndexedFieldController } from './FormIndexedFieldController'

export interface FormFieldArrayController<T> extends FormFieldHandler<T[]> {
  controllers: FormIndexedFieldController<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
  removeAt: ArrayRemoveAtFn
}
