import { PassComponentFn } from './PassComponentFn'
import { PassFieldFn } from './PassFieldFn'
import { ChangeFn } from '../../props/ChangeFn'
import { DeepPartial } from '../../type/DeepPartial'

/** Object interface that can be used to handle form */
export interface FormHandler<T> {
  value?: DeepPartial<T> | undefined
  setValue: ChangeFn<T>
  pass: PassFieldFn<T>
  passComponent: PassComponentFn<T>
}
