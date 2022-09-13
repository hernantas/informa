import { ChangeFn } from './ChangeFn'
import { DeepPartial } from '../type/DeepPartial'

/** Form component properties. Can be used as base interface for component props */
export interface FormProps<T> {
  value?: DeepPartial<T> | undefined
  onChange?: ChangeFn<T>
}
