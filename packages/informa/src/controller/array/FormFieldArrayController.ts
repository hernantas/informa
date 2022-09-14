import { ArrayInsertFn } from './ArrayInsertFn'
import { FormFieldController } from '../field/FormFieldController'
import { FormIndexedFieldController } from './FormIndexedFieldController'

export interface FormFieldArrayController<T> extends FormFieldController<T[]> {
  controllers: FormIndexedFieldController<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
}
