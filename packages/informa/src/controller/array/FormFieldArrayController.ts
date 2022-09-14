import { FormFieldController } from '../field/FormFieldController'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { FormIndexedFieldController } from './FormIndexedFieldController'

export interface FormFieldArrayController<T> extends FormFieldController<T[]> {
  controllers: FormIndexedFieldController<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
  removeAt: ArrayRemoveAtFn
}
