import { PassComponentFn } from './PassComponentFn'
import { PassFieldFn } from './PassFieldFn'
import { ChangeFn } from '../../props/ChangeFn'
import { DeepPartial } from '../../type/DeepPartial'

/** Object interface that can be used to control form */
export interface FormController<T> {
  value?: DeepPartial<T> | undefined
  setValue: ChangeFn<T>
  pass: PassFieldFn<T>
  passComponent: PassComponentFn<T>
}
