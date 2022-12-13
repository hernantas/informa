import { FormGroupHandler } from '../group/FormGroupHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'

export interface FormArrayHandler<T> extends FormGroupHandler<T[]> {
  handlers: FormGroupHandler<T>[]
  append: ArrayInsertFn<T>
  prepend: ArrayInsertFn<T>
  removeAt: ArrayRemoveAtFn
}
