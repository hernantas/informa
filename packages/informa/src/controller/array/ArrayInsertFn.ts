import { DeepPartial } from '../../type/DeepPartial'

/** Function interface for function that can insert element to an array */
export interface ArrayModifyFn<T> {
  (...newValues: DeepPartial<T>[]): void
}
