import { ChangeFn } from '../../type/ChangeFn'
import { DeepPartial } from '../../type/DeepPartial'

export interface ValueState<T> {
  value?: DeepPartial<T> | undefined
  setValue: ChangeFn<T>
}
