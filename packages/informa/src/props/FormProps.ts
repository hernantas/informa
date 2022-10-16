import { Key } from 'react'
import { DeepPartial } from '../type/DeepPartial'
import { ChangeFn } from './ChangeFn'

/** Form component properties. Can be used as base interface for component props */
export interface FormProps<T> {
  value?: DeepPartial<T> | undefined
  onChange?: ChangeFn<T>
  key?: Key | undefined
}
