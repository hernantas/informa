import { DeepPartial } from '../type/DeepPartial'

/** @internal */
export interface FormState<T> {
  value?: DeepPartial<T> | undefined
  locked: boolean
}
